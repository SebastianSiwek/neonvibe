"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-surface px-6 py-12 text-center">
        <p className="font-heading text-2xl font-bold text-primary neon-text-primary">
          Dziękujemy!
        </p>
        <p className="mt-3 text-muted">
          Twoje zapytanie zostało wysłane. Odezwiemy się najszybciej jak to
          możliwe.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors";
  const labelClasses = "block text-sm font-medium text-muted mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Imię i nazwisko
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jan Kowalski"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jan@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Phone - full width */}
      <div>
        <label htmlFor="phone" className={labelClasses}>
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+48 123 456 789"
          className={inputClasses}
        />
      </div>

      {/* Message - full width */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Opisz swój pomysł na neon..."
          className={`${inputClasses} resize-y`}
        />
      </div>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          className="rounded-full bg-primary px-8 py-3 font-heading font-semibold text-background transition-all duration-300 hover:neon-glow-primary hover:scale-[1.02] active:scale-[0.98]"
        >
          Wyślij zapytanie
        </button>
      </div>
    </form>
  );
}
