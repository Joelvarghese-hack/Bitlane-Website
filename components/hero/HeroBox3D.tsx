"use client";

import { useEffect, useRef } from "react";
import type * as THREE from "three";

/**
 * The hero's signature object: a single, softly lit cardboard moving box that
 * idles with a slow rotation, tilts toward the pointer, and drifts as the hero
 * scrolls away. One deliberate 3D moment, from the brand's own world (a box),
 * not decorative particles. Fully skipped under reduced motion (a static frame
 * is still drawn) and torn down cleanly on unmount.
 */
export default function HeroBox3D({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const T = (await import("three")) as typeof THREE;
      if (disposed || !mountRef.current) return;

      const host = mountRef.current;
      let w = host.clientWidth || 1;
      let h = host.clientHeight || 1;

      const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h);
      renderer.toneMapping = T.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.02;
      renderer.outputColorSpace = T.SRGBColorSpace;
      host.appendChild(renderer.domElement);

      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(32, w / h, 0.1, 100);
      camera.position.set(0, 0.55, 6.2);
      camera.lookAt(0, 0.1, 0);

      // ---- lighting: soft studio key + fill + a faint brand-orange rim -------
      const hemi = new T.HemisphereLight(0xffffff, 0x2a221b, 0.55);
      scene.add(hemi);
      const key = new T.DirectionalLight(0xffffff, 2.3);
      key.position.set(4, 6, 5);
      scene.add(key);
      const rim = new T.DirectionalLight(0xfe4436, 0.9);
      rim.position.set(-5, 1.5, -4);
      scene.add(rim);
      const fill = new T.DirectionalLight(0xffffff, 0.5);
      fill.position.set(-3, -2, 4);
      scene.add(fill);

      // ---- procedural cardboard textures ------------------------------------
      const textures: THREE.Texture[] = [];
      const makeTexture = (
        draw: (ctx: CanvasRenderingContext2D, s: number) => void,
      ) => {
        const s = 512;
        const c = document.createElement("canvas");
        c.width = c.height = s;
        const ctx = c.getContext("2d")!;
        // base cardboard gradient
        const g = ctx.createLinearGradient(0, 0, s, s);
        g.addColorStop(0, "#c9a468");
        g.addColorStop(1, "#b88c52");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, s, s);
        // faint fibre speckle
        for (let i = 0; i < 2600; i++) {
          const a = Math.random() * 0.05;
          ctx.fillStyle = Math.random() > 0.5 ? `rgba(90,60,30,${a})` : `rgba(255,240,215,${a})`;
          ctx.fillRect(Math.random() * s, Math.random() * s, 2, 2);
        }
        draw(ctx, s);
        const tex = new T.CanvasTexture(c);
        tex.colorSpace = T.SRGBColorSpace;
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        textures.push(tex);
        return tex;
      };

      const tape = (ctx: CanvasRenderingContext2D, x: number, y: number, ww: number, hh: number) => {
        ctx.fillStyle = "rgba(216,196,150,0.85)";
        ctx.fillRect(x, y, ww, hh);
        ctx.strokeStyle = "rgba(120,95,55,0.35)";
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, ww, hh);
      };
      const seam = (ctx: CanvasRenderingContext2D, s: number, vertical: boolean) => {
        ctx.strokeStyle = "rgba(90,62,32,0.28)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        if (vertical) {
          ctx.moveTo(s * 0.5, 0);
          ctx.lineTo(s * 0.5, s);
        } else {
          ctx.moveTo(0, s * 0.5);
          ctx.lineTo(s, s * 0.5);
        }
        ctx.stroke();
      };

      const sideTex = makeTexture((ctx, s) => seam(ctx, s, true));
      const backTex = makeTexture((ctx, s) => seam(ctx, s, true));
      const bottomTex = makeTexture(() => {});
      const topTex = makeTexture((ctx, s) => {
        // two flaps meeting at the centre, taped down the seam
        ctx.fillStyle = "rgba(60,42,22,0.10)";
        ctx.fillRect(0, 0, s * 0.5, s);
        ctx.strokeStyle = "rgba(70,48,26,0.35)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(s * 0.5, 0);
        ctx.lineTo(s * 0.5, s);
        ctx.stroke();
        tape(ctx, s * 0.5 - 34, 0, 68, s);
      });
      const frontTex = makeTexture((ctx, s) => {
        seam(ctx, s, true);
        // a plain shipping label
        const lx = s * 0.18, ly = s * 0.3, lw = s * 0.64, lh = s * 0.34;
        ctx.fillStyle = "rgba(247,244,238,0.95)";
        ctx.fillRect(lx, ly, lw, lh);
        ctx.strokeStyle = "rgba(120,95,55,0.4)";
        ctx.lineWidth = 2;
        ctx.strokeRect(lx, ly, lw, lh);
        ctx.fillStyle = "rgba(70,60,48,0.5)";
        for (let i = 0; i < 4; i++) ctx.fillRect(lx + 20, ly + 26 + i * 26, lw - (i === 3 ? 120 : 40), 8);
      });

      const mat = (map: THREE.Texture) =>
        new T.MeshStandardMaterial({ map, roughness: 0.9, metalness: 0.02 });
      // BoxGeometry group order: right, left, top, bottom, front(+z), back
      const materials = [
        mat(sideTex),
        mat(sideTex),
        mat(topTex),
        mat(bottomTex),
        mat(frontTex),
        mat(backTex),
      ];

      const geo = new T.BoxGeometry(2.1, 2.1, 2.1);
      const box = new T.Mesh(geo, materials);
      box.rotation.x = -0.05;
      box.rotation.y = -0.5;
      scene.add(box);

      // soft contact glow beneath the box (a faded sprite-like plane)
      const shadowGeo = new T.PlaneGeometry(3.6, 1.4);
      const shadowMat = new T.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28 });
      const shadow = new T.Mesh(shadowGeo, shadowMat);
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.y = -1.55;
      scene.add(shadow);

      // ---- interaction state -------------------------------------------------
      const pointer = { x: 0, y: 0 };
      const target = { x: 0, y: 0 };
      let scrollP = 0;

      const onPointer = (e: PointerEvent) => {
        target.x = (e.clientX / window.innerWidth) * 2 - 1;
        target.y = (e.clientY / window.innerHeight) * 2 - 1;
      };
      const onScroll = () => {
        const r = host.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        scrollP = Math.min(1, Math.max(0, -r.top / vh));
      };

      const resize = () => {
        if (!mountRef.current) return;
        w = mountRef.current.clientWidth || 1;
        h = mountRef.current.clientHeight || 1;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      const ro = new ResizeObserver(resize);
      ro.observe(host);

      const render = () => renderer.render(scene, camera);

      if (reduce) {
        // one static, composed frame — no loop, no listeners
        render();
        cleanup = () => {
          ro.disconnect();
          geo.dispose();
          shadowGeo.dispose();
          shadowMat.dispose();
          materials.forEach((m) => m.dispose());
          textures.forEach((t) => t.dispose());
          renderer.dispose();
          if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
        };
        return;
      }

      window.addEventListener("pointermove", onPointer, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      render(); // draw one composed frame immediately

      let raf = 0;
      const clock = new T.Clock();
      const loop = () => {
        raf = requestAnimationFrame(loop);
        if (document.hidden) return;
        const t = clock.getElapsedTime();
        pointer.x += (target.x - pointer.x) * 0.05;
        pointer.y += (target.y - pointer.y) * 0.05;
        box.rotation.y += 0.0032;
        box.rotation.z = pointer.x * 0.12;
        box.rotation.x = -0.05 + pointer.y * 0.12 + scrollP * 0.25;
        box.position.y = Math.sin(t * 0.9) * 0.07 + scrollP * 0.6;
        shadow.position.y = -1.55 + Math.sin(t * 0.9) * 0.04;
        shadowMat.opacity = 0.28 * (1 - scrollP * 0.7);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("scroll", onScroll);
        geo.dispose();
        shadowGeo.dispose();
        shadowMat.dispose();
        materials.forEach((m) => m.dispose());
        textures.forEach((t) => t.dispose());
        renderer.dispose();
        if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}
