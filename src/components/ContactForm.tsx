"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgawenya";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target as HTMLFormElement),
      });
      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors";

  if (status === "sent") {
    return (
      <div className="max-w-lg">
        <p className="font-display text-2xl italic text-ink">Message sent.</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Thanks for reaching out — Mokshaa will get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm uppercase tracking-[0.2em] text-ink underline-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-lg flex-col gap-8">
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-[0.2em] text-ink-faint">Name</span>
        <input
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
          placeholder="Your name"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-[0.2em] text-ink-faint">Email</span>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
          placeholder="you@email.com"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-[0.2em] text-ink-faint">Message</span>
        <textarea
          required
          rows={5}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClasses} resize-none`}
          placeholder="What are you working on?"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-fit text-sm uppercase tracking-[0.2em] text-ink underline-accent disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>
      {status === "error" && (
        <p className="text-xs text-accent">
          Something went wrong sending that — please try again, or email
          directly instead.
        </p>
      )}
    </form>
  );
}
