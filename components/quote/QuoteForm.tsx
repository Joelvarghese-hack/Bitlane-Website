"use client";

import { QUOTE_EMAIL, submitQuoteForm } from "@/lib/formSubmit";

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
  "w-full rounded-2xl border border-paper/12 bg-black/45 px-4 py-3 text-sm text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-amber-pulse/70 focus:bg-black/60";

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
    <div className={className}>
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
    <div className={className}>
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

  return (
    <form
      action={`mailto:${QUOTE_EMAIL}`}
      method="POST"
      encType="text/plain"
      onSubmit={submitQuoteForm}
    >
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
          <div>
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

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-velocity-red px-7 py-3.5 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5 md:text-base"
      >
        {submitLabel}
      </button>

      {compact ? (
        <p className="mt-3 text-center text-xs text-paper/50">
          No commitment. We reply fast, often within the hour.
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
