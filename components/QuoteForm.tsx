"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sendWeb3Form } from "@/lib/w3f";
import { isEmail, isPhone } from "@/lib/validate";
import {
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

type FormState = "idle" | "sending" | "success" | "error";

const services = [
  "Gutter Cleaning",
  "Roof Cleaning",
  "Roof Restoration",
  "Roof Painting / Coating",
  "Leak Investigation & Repair",
];

const timeframes = [
  "As soon as possible",
  "Within 1-2 weeks",
  "This month",
  "Just comparing prices",
];

const regions = ["Adelaide", "Victoria", "Tasmania"];

export default function QuoteForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errMsg, setErrMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    region: regions[0],
    address: "",
    service: services[0],
    when: timeframes[0],
    details: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (form.email && !isEmail(form.email)) e.email = "Enter a valid email.";
    if (!isPhone(form.phone)) e.phone = "Enter a valid phone number.";
    if (!form.address.trim()) e.address = "Please add your suburb/address.";
    if (form.details.trim().length < 10) {
      e.details = "Please describe the job (10+ characters).";
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

    setTouched({
      name: true,
      email: true,
      phone: true,
      region: true,
      address: true,
      service: true,
      when: true,
      details: true,
    });

    if (Object.keys(errors).length) {
      setState("error");
      setErrMsg("Please fix the highlighted fields.");
      return;
    }

    setState("sending");
    setErrMsg("");

    try {
      await sendWeb3Form({
        subject: "Prime Roof Care - Quote Request",
        name: form.name,
        email: form.email || "noreply@primeroofcare.com.au",
        message: [
          `Region: ${form.region}`,
          `Service: ${form.service}`,
          `When: ${form.when}`,
          `Phone: ${form.phone}`,
          `Address: ${form.address}`,
          "",
          "Details:",
          form.details,
        ].join("\n"),
      });

      setState("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        region: regions[0],
        address: "",
        service: services[0],
        when: timeframes[0],
        details: "",
      });
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
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="mx-auto max-w-sm rounded-lg bg-white p-8 text-center shadow-2xl"
            >
              <CheckCircle2 size={60} className="mx-auto mb-4 text-emerald-500" />
              <h2 className="mb-2 text-xl font-semibold text-gray-800">
                Quote request sent
              </h2>
              <p className="mb-6 text-gray-600">
                Thanks for your details. We will get back to you shortly.
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
        <div className="grid gap-5 sm:grid-cols-2">
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
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="field-label">
              <Mail size={14} className="field-icon" /> Email (optional)
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
              <MapPin size={14} className="field-icon" /> Region
            </label>
            <select
              className={decorate("region")}
              value={form.region}
              onChange={(e) => setForm({ ...form, region: e.target.value })}
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="field-label">
            <MapPin size={14} className="field-icon" /> Address / Suburb
          </label>
          <input
            className={decorate("address")}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="Suburb and state"
          />
          {touched.address && errors.address && <p className="error-text">{errors.address}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="field-label">
              <ClipboardList size={14} className="field-icon" /> Service
            </label>
            <select
              className={decorate("service")}
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="field-label">
              <CalendarClock size={14} className="field-icon" /> When do you need it?
            </label>
            <select
              className={decorate("when")}
              value={form.when}
              onChange={(e) => setForm({ ...form, when: e.target.value })}
            >
              {timeframes.map((timeframe) => (
                <option key={timeframe} value={timeframe}>
                  {timeframe}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="field-label">
            <MessageSquare size={14} className="field-icon" /> Job details
          </label>
          <textarea
            className={decorate("details") + " min-h-[140px]"}
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            placeholder="Example: tiled roof, gutters overflowing at the back, leak near kitchen during heavy rain."
          />
          {touched.details && errors.details && <p className="error-text">{errors.details}</p>}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <button type="submit" disabled={state === "sending"} className="btn-solid-lg">
            <ShieldCheck size={18} className="mr-2" />
            {state === "sending" ? "Sending..." : "Request Quote"}
          </button>

          {state === "error" && errMsg && (
            <p className="text-sm font-medium text-rose-500">{errMsg}</p>
          )}
        </div>
      </form>
    </div>
  );
}
