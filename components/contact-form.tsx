"use client";

import { LoaderCircle, Send } from "lucide-react";
import { type FormEvent, useMemo, useState } from "react";

import { buttonClassName, cn } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  businessName: string;
  message: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  phone: "",
  businessName: "",
  message: ""
};

function validate(form: FormState) {
  const nextErrors: ErrorState = {};

  if (form.name.trim().length < 2) {
    nextErrors.name = "Enter your name.";
  }

  if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) {
    nextErrors.phone = "Enter a valid phone number.";
  }

  if (form.businessName.trim().length < 2) {
    nextErrors.businessName = "Enter your business name.";
  }

  if (form.message.trim().length < 12) {
    nextErrors.message = "Tell us a little about your project.";
  }

  return nextErrors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<ErrorState>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  const isDisabled = useMemo(() => status === "submitting", [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setFeedback("Please fix the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Something went wrong.");
      }

      setStatus("success");
      setFeedback(payload.message || "Thanks. We will get back to you soon.");
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Could not send your message. Please try again."
      );
    }
  }

  function fieldClass(name: keyof FormState) {
    return cn(
      "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[var(--brand-trust)] focus:ring-4 focus:ring-[rgba(11,95,165,0.1)]",
      errors[name] ? "border-red-300" : "border-slate-200"
    );
  }

  return (
    <form onSubmit={handleSubmit} className="panel p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">
            Name
          </span>
          <input
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className={fieldClass("name")}
            placeholder="Your name"
            autoComplete="name"
          />
          {errors.name ? (
            <span className="mt-2 block text-xs text-red-600">{errors.name}</span>
          ) : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">
            Phone
          </span>
          <input
            value={form.phone}
            onChange={(event) =>
              setForm((current) => ({ ...current, phone: event.target.value }))
            }
            className={fieldClass("phone")}
            placeholder="+94 77 123 4567"
            autoComplete="tel"
          />
          {errors.phone ? (
            <span className="mt-2 block text-xs text-red-600">{errors.phone}</span>
          ) : null}
        </label>
      </div>

      <div className="mt-5">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">
            Business name
          </span>
          <input
            value={form.businessName}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                businessName: event.target.value
              }))
            }
            className={fieldClass("businessName")}
            placeholder="Your business name"
            autoComplete="organization"
          />
          {errors.businessName ? (
            <span className="mt-2 block text-xs text-red-600">
              {errors.businessName}
            </span>
          ) : null}
        </label>
      </div>

      <div className="mt-5">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-800">
            Message
          </span>
          <textarea
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({ ...current, message: event.target.value }))
            }
            className={fieldClass("message")}
            placeholder="Tell us what you need, your timeline, and the type of business."
            rows={6}
          />
          {errors.message ? (
            <span className="mt-2 block text-xs text-red-600">
              {errors.message}
            </span>
          ) : null}
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isDisabled}
          className={cn(
            buttonClassName("primary", "large"),
            "min-w-[220px]",
            isDisabled ? "cursor-not-allowed opacity-80" : ""
          )}
        >
          {status === "submitting" ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Inquiry
            </>
          )}
        </button>
        <p
          className={cn(
            "text-sm",
            status === "success" ? "text-[var(--brand-growth)]" : "text-slate-500",
            status === "error" ? "text-red-600" : ""
          )}
        >
          {feedback || "We usually reply within one business day."}
        </p>
      </div>
    </form>
  );
}
