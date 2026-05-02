"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sendWeb3Form } from "@/lib/w3f";
import { isEmail, isPhone } from "@/lib/validate";
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errMsg, setErrMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!isEmail(form.email)) e.email = "Enter a valid email.";
    if (!isPhone(form.phone)) e.phone = "Enter a valid phone number.";
    if (form.message.trim().length < 10) {
      e.message = "Please write at least 10 characters.";
    }
    return e;
  }, [form]);

  const decorate = (field: string) =>
    !touched[field]
      ? "input-pro"
      : errors[field]
        ? "input-pro border-rose-400 ring-2 ring-rose-400"
        : "input-pro border-emerald-400 ring-2 ring-emerald-400";

  useEffect(() => {
    if (state !== "success") return;
    const id = setTimeout(() => setState("idle"), 6000);
    return () => clearTimeout(id);
  }, [state]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "sending") return;

    setTouched({ name: true, email: true, phone: true, address: true, message: true });

    if (Object.keys(errors).length) {
      setState("error");
      setErrMsg("Please fix the highlighted fields.");
      return;
    }

    setState("sending");
    setErrMsg("");

    try {
      await sendWeb3Form({
        subject: "Prime Roof Care - Contact Form",
        name: form.name,
        email: form.email,
        message: [
          `Phone: ${form.phone}`,
          `Address / suburb: ${form.address}`,
          "",
          form.message,
        ].join("\n"),
      });

      setState("success");
      setForm({ name: "", email: "", phone: "", address: "", message: "" });
      setTouched({});
    } catch (err: any) {
      setState("error");
      setErrMsg(err?.message || "Submission failed. Please call 0469 097 690.");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {state === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-sm rounded-lg bg-white p-8 text-center shadow-2xl"
            >
              <CheckCircle2 size={60} className="mx-auto mb-4 text-emerald-500" />
              <h2 className="mb-2 text-xl font-semibold text-gray-800">
                Message sent
              </h2>
              <p className="mb-6 text-gray-600">
                Thank you for reaching out. We will get back to you soon.
              </p>
              <button
                onClick={() => setState("idle")}
                className="btn-solid-lg px-6 py-2 text-sm"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={onSubmit} noValidate className="form-shell space-y-6 p-6 sm:p-8">
        <div>
          <label className="field-label">
            <User size={14} className="field-icon" /> Name
          </label>
          <input
            className={decorate("name")}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
          />
          {touched.name && errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div>
          <label className="field-label">
            <Mail size={14} className="field-icon" /> Email
          </label>
          <input
            className={decorate("email")}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
          />
          {touched.email && errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div>
          <label className="field-label">
            <Phone size={14} className="field-icon" /> Phone
          </label>
          <input
            className={decorate("phone")}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="0469 097 690"
          />
          {touched.phone && errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        <div>
          <label className="field-label">
            <MapPin size={14} className="field-icon" /> Address / Suburb
          </label>
          <input
            className={decorate("address")}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="Adelaide, Victoria or Tasmania suburb"
          />
        </div>

        <div>
          <label className="field-label">
            <MessageSquare size={14} className="field-icon" /> How can we help?
          </label>
          <textarea
            className={decorate("message") + " min-h-[120px]"}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Roof leak, gutter clean, restoration quote, coating, or another roof issue."
          />
          {touched.message && errors.message && (
            <p className="error-text">{errors.message}</p>
          )}
        </div>

        <button type="submit" disabled={state === "sending"} className="btn-solid-lg">
          <ShieldCheck size={18} className="mr-2" />
          {state === "sending" ? "Sending..." : "Send Message"}
        </button>

        {state === "error" && errMsg && (
          <p className="text-sm font-medium text-rose-500">{errMsg}</p>
        )}
      </form>
    </div>
  );
}
