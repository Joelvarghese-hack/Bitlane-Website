"use client";

import { useEffect, useState, type FormEvent } from "react";

import { sendQuote, HONEYPOT_FIELD, TURNSTILE_FIELD } from "@/lib/formSubmit";

// Set NEXT_PUBLIC_TURNSTILE_SITE_KEY in Cloudflare Pages to switch the bot
// challenge on. Until then the widget stays off and the form works as normal.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

const MOVE_SIZES = [
  "Studio or less",
  "1 Bedroom Apartment",
  "2 Bedroom Apartment",
  "3 Bedroom Apartment",
  "1 Bedroom House",
  "2 Bedroom House",
  "3 Bedroom House",
  "4+ Bedroom House",
  "Office",
  "Storage Unit",
  "Other",
];

const PREFERRED_CONTACT = ["Phone call", "Text message", "Email"];

const HEARD_OPTIONS = [
  "Google",
  "Yelp",
  "Facebook",
  "Instagram",
  "From a friend",
  "Other",
];

// Kept verbatim per request, leading space included.
const SPECIAL_PLACEHOLDER = " i have a special item/appliances that needs extra care";

const INPUT_CLASS =
  "block w-full min-w-0 max-w-full appearance-none rounded-2xl border border-paper/12 bg-black/45 px-4 py-3 text-sm text-paper placeholder:text-paper/35 outline-none transition-colors [color-scheme:dark] focus:border-amber-pulse/70 focus:bg-black/60";

const SELECT_CLASS = `${INPUT_CLASS} cursor-pointer appearance-none pr-10 [&>option]:bg-[#111116] [&>option]:text-paper`;

const TEXTAREA_CLASS = `${INPUT_CLASS} min-h-[96px] resize-y leading-relaxed`;

const LABEL_CLASS =
  "mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-paper/55";

function SelectField({
  id,
  name,
  label,
  options,
  placeholder,
  className = "",
}: {
  id: string;
  name: string;
  label: string;
  options: string[];
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={`min-w-0 ${className}`}>
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      <div className="relative">
        <select id={id} name={name} className={SELECT_CLASS} defaultValue="">
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-paper/45"
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
  className = "",
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={`min-w-0 ${className}`}>
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={INPUT_CLASS}
      />
    </div>
  );
}

export default function QuoteForm({
  variant = "full",
  submitLabel = "Get my free quote",
}: {
  variant?: "compact" | "full";
  submitLabel?: string;
}) {
  const compact = variant === "compact";
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  // Load the Cloudflare Turnstile script only when a site key is configured.
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    if (document.getElementById("cf-turnstile-script")) return;
    const s = document.createElement("script");
    s.id = "cf-turnstile-script";
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  }, []);

  const goThankYou = () => {
    const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    window.location.href = `${base}/thank-you/`;
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // Honeypot: real users can't see or fill this field. If it has any value the
    // request is a bot — show a normal "success" screen and relay nothing.
    const trap = (form.elements.namedItem(HONEYPOT_FIELD) as HTMLInputElement | null)?.value ?? "";
    if (trap.trim()) {
      goThankYou();
      return;
    }

    // If the Turnstile challenge is enabled, refuse to dispatch without a token.
    if (TURNSTILE_SITE_KEY) {
      const token = (form.elements.namedItem(TURNSTILE_FIELD) as HTMLInputElement | null)?.value ?? "";
      if (!token.trim()) {
        setStatus("error");
        return;
      }
    }

    // Fire the submission in the background (keepalive lets it finish after we
    // navigate) and take the user straight to the Thank You screen — no waiting.
    sendQuote(form).catch(() => {});
    // Scrub the raw phone / email / addresses out of the DOM once it's on the wire.
    form.reset();
    goThankYou();
  }

  return (
    <form onSubmit={handleSubmit}>
      {status === "sending" && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-ink/85 backdrop-blur-md"
          role="status"
          aria-live="assertive"
        >
          <span className="h-12 w-12 animate-spin rounded-full border-[3px] border-white/20 border-t-velocity-red" />
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-paper">
            Securing your details…
          </p>
        </div>
      )}

      {/* Invisible honeypot trap — hidden from humans, tempting to scraper bots. */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="q-mname">Middle name</label>
        <input
          id="q-mname"
          type="text"
          name={HONEYPOT_FIELD}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="q-name" name="Full Name" label="Full Name" required autoComplete="name" />
        <Field id="q-phone" name="Phone" label="Phone" type="tel" required autoComplete="tel" />

        {!compact && (
          <Field
            id="q-email"
            name="Email"
            label="Email"
            type="email"
            required
            autoComplete="email"
            className="sm:col-span-2"
          />
        )}

        <Field
          id="q-from"
          name="Pick Up Location"
          label="Pick Up Address"
          placeholder="Street, city"
          autoComplete="address-line1"
        />
        <Field
          id="q-to"
          name="Drop Off Location"
          label="Drop Off Address"
          placeholder="Street, city"
          autoComplete="address-line1"
        />

        {!compact && (
          <>
            <Field
              id="q-zip-from"
              name="Pick Up Postal Code"
              label="Pick Up Postal Code"
              placeholder="e.g. K7L 3N6"
              autoComplete="postal-code"
            />
            <Field
              id="q-zip-to"
              name="Drop Off Postal Code"
              label="Drop Off Postal Code"
              placeholder="e.g. M5V 2T6"
              autoComplete="postal-code"
            />
          </>
        )}

        <SelectField
          id="q-size"
          name="Move Size"
          label="Size of Apartment / Home"
          options={MOVE_SIZES}
          placeholder="Select your move size"
          className={compact ? "sm:col-span-2" : ""}
        />

        {!compact && (
          <div className="min-w-0">
            <label htmlFor="q-date" className={LABEL_CLASS}>
              Date of Planning
            </label>
            <input id="q-date" name="Moving Date" type="date" className={INPUT_CLASS} />
          </div>
        )}

        {!compact && (
          <SelectField
            id="q-contact"
            name="Preferred Contact"
            label="How Should We Contact You"
            options={PREFERRED_CONTACT}
            placeholder="Phone or email"
          />
        )}

        {!compact && (
          <SelectField
            id="q-heard"
            name="How Did You Hear About Us"
            label="How Did You Hear About Us"
            options={HEARD_OPTIONS}
            placeholder="Select one"
          />
        )}

        {!compact && (
          <div className="sm:col-span-2">
            <label htmlFor="q-special" className={LABEL_CLASS}>
              Any Special Request
            </label>
            <textarea
              id="q-special"
              name="Special Request"
              rows={3}
              placeholder={SPECIAL_PLACEHOLDER}
              className={TEXTAREA_CLASS}
            />
          </div>
        )}
      </div>

      {TURNSTILE_SITE_KEY && (
        <div
          className="cf-turnstile mt-5"
          data-sitekey={TURNSTILE_SITE_KEY}
          data-theme="dark"
        />
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-full bg-velocity-red px-7 py-3.5 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 md:text-base"
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-velocity-red" role="alert">
          Something went wrong sending your request. Please try again, or call us
          at{" "}
          <a href="tel:+16137701638" className="font-semibold underline">
            (613) 770-1638
          </a>
          .
        </p>
      )}

      {compact ? (
        <p className="mt-3 text-center text-xs text-paper/50">
          No commitment. We reply fast, often under 30 minutes.
        </p>
      ) : (
        <p className="mt-4 text-xs leading-relaxed text-paper/45">
          By submitting this request you agree to receive calls or text messages
          from Bitlane about your quote. We only contact you about your move.
          Your number is never sold or shared for outside marketing. Standard
          message and data rates may apply.
        </p>
      )}
    </form>
  );
}
