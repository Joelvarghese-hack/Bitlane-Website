export const QUOTE_EMAIL = "bitlanerelocations@gmail.com";

/**
 * Quote submissions are relayed to QUOTE_EMAIL by FormSubmit
 * (https://formsubmit.co) — a free relay that needs no backend and no account.
 * We post the details in the background with fetch, so the visitor never leaves
 * the site and no mail app is ever opened. On success the caller sends them to
 * the /thank-you/ page.
 *
 * The endpoint is read from an environment variable first so the backend target
 * is never hard-pinned in source; it falls back to the FormSubmit relay for the
 * current free setup. Set NEXT_PUBLIC_FORM_ENDPOINT in Cloudflare Pages to point
 * at a Worker or other relay later without touching code.
 *
 * One-time setup: the first submission makes FormSubmit email QUOTE_EMAIL an
 * "Activate form" link that must be clicked once; after that every submission
 * is delivered straight to the inbox.
 */
const ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? `https://formsubmit.co/ajax/${QUOTE_EMAIL}`;

/** Name of the invisible honeypot field. Real users never see or fill it. */
export const HONEYPOT_FIELD = "user_middle_name";

/** Name of the Cloudflare Turnstile token field (auto-injected by the widget). */
export const TURNSTILE_FIELD = "cf-turnstile-response";

const FIELD_ORDER = [
  "Full Name",
  "Phone",
  "Email",
  "Preferred Contact",
  "Pick Up Location",
  "Drop Off Location",
  "Pick Up Postal Code",
  "Drop Off Postal Code",
  "Move Size",
  "Moving Date",
  "How Did You Hear About Us",
  "Special Request",
] as const;

/**
 * Strips HTML/script vectors and obvious injection payloads from a raw input
 * string before it is ever put on the wire. Note: FormSubmit only emails the
 * data (there is no SQL database in this stack), so this is defence-in-depth to
 * keep the delivered email clean rather than a SQL guard.
 */
export function sanitizeInput(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")                                   // strip HTML tags
    .replace(/[<>]/g, "")                                      // stray angle brackets
    .replace(/javascript:/gi, "")                              // js: URIs
    .replace(/on\w+\s*=/gi, "")                                // inline event handlers
    .replace(/\b(?:UNION\s+SELECT|SELECT\s+\*\s+FROM|DROP\s+TABLE|OR\s+1\s*=\s*1|;--)\b/gi, "")
    .trim()
    .slice(0, 2000);
}

export function buildQuotePayload(form: HTMLFormElement): Record<string, string> {
  const data = new FormData(form);
  const payload: Record<string, string> = {};

  for (const field of FIELD_ORDER) {
    const raw = data.get(field);
    const value = typeof raw === "string" ? sanitizeInput(raw) : "";
    if (value) payload[field] = value;
  }

  // Pass the Turnstile token through if the widget is enabled (it self-injects
  // this field into the form). Kept out of FIELD_ORDER so it stays optional.
  const token = data.get(TURNSTILE_FIELD);
  if (typeof token === "string" && token) payload[TURNSTILE_FIELD] = token;

  const name = payload["Full Name"];
  // FormSubmit control fields: email subject, a readable table layout, and no
  // captcha redirect (we handle the "thank you" ourselves).
  payload._subject = name ? `New quote request from ${name}` : "New quote request";
  payload._template = "table";
  payload._captcha = "false";

  return payload;
}

/**
 * Sends the quote to QUOTE_EMAIL in the background. Resolves on success and
 * throws on any failure so the caller can show an error instead of navigating.
 */
export async function sendQuote(form: HTMLFormElement): Promise<void> {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(buildQuotePayload(form)),
  });

  if (!response.ok) {
    throw new Error(`Quote submission failed with status ${response.status}`);
  }

  const result = (await response.json().catch(() => null)) as { success?: string } | null;
  if (result && String(result.success) === "false") {
    throw new Error("Quote submission was rejected");
  }
}
