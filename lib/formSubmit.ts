export const QUOTE_EMAIL = "joelofficial201@gmail.com";

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

export function buildQuoteMailto(form: HTMLFormElement): string {
  const data = new FormData(form);
  const lines: string[] = [
    "Hello Bitlane team,",
    "",
    "I would like a free moving quote. Here are my details:",
    "",
  ];

  for (const field of FIELD_ORDER) {
    const raw = data.get(field);
    const value = typeof raw === "string" ? raw.trim() : "";
    if (value) {
      lines.push(`${field}: ${value}`);
    }
  }

  const name = data.get("Full Name");
  const subject =
    typeof name === "string" && name.trim()
      ? `Quote request from ${name.trim()}`
      : "Quote request";

  return `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
}

/**
 * Opens the visitor's email client pre-filled with their quote details, then
 * sends them to the thank-you page. The short delay gives the mail client time
 * to launch before the page navigates away.
 */
export function submitQuoteForm(event: {
  preventDefault(): void;
  currentTarget: HTMLFormElement;
}): void {
  event.preventDefault();
  const mailto = buildQuoteMailto(event.currentTarget);
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  window.location.href = mailto;
  window.setTimeout(() => {
    window.location.href = `${base}/thank-you/`;
  }, 600);
}
