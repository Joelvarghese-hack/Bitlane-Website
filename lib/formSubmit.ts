export const QUOTE_EMAIL = "amalshibu08@gmail.com";

/**
 * Quote submissions are relayed to QUOTE_EMAIL by FormSubmit
 * (https://formsubmit.co) — a free relay that needs no backend and no account.
 * We post the details in the background with fetch, so the visitor never leaves
 * the site and no mail app is ever opened. On success the caller sends them to
 * the /thank-you/ page.
 *
 * One-time setup: the first submission makes FormSubmit email QUOTE_EMAIL an
 * "Activate form" link that must be clicked once; after that every submission
 * is delivered straight to the inbox.
 */
const ENDPOINT = "https://formsubmit.co/ajax/amalshibu08@gmail.com";

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

export function buildQuotePayload(form: HTMLFormElement): Record<string, string> {
  const data = new FormData(form);
  const payload: Record<string, string> = {};

  for (const field of FIELD_ORDER) {
    const raw = data.get(field);
    const value = typeof raw === "string" ? raw.trim() : "";
    if (value) payload[field] = value;
  }

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
