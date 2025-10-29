'use client';

import { useState, useMemo, useEffect } from 'react';
import { isEmail, isPhone } from '@/lib/validate';
import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

async function postQuote(data: any) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function QuoteForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errMsg, setErrMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    title: 'Quote Request',
    _honeypot: '',
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // validation
  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!isEmail(form.email)) e.email = 'Enter a valid email.';
    if (!isPhone(form.phone)) e.phone = 'Enter a valid phone number.';
    if (form.message.trim().length < 10)
      e.message = 'Give a few details so we can quote (10+ chars).';
    return e;
  }, [form]);

  // ring modifiers per field (neutral / error / ok)
  function decorate(field: string) {
    const base = 'input-pro';
    if (!touched[field]) return base;
    return errors[field]
      ? base + ' ring-2 ring-rose-400 border-rose-400'
      : base + ' ring-2 ring-emerald-400 border-emerald-400';
  }

  // auto-hide green toast after a few seconds
  useEffect(() => {
    if (state === 'success') {
      const id = setTimeout(() => setState('idle'), 6000);
      return () => clearTimeout(id);
    }
  }, [state]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === 'sending') return;

    // mark all touched so validation shows
    setTouched({
      name: true,
      email: true,
      phone: true,
      address: true,
      message: true,
    });

    if (Object.keys(errors).length) {
      setState('error');
      setErrMsg('Please fix the highlighted fields.');
      return;
    }

    setState('sending');
    try {
      const { ok, error } = await postQuote(form);
      if (ok) {
        setState('success');
        // clear message so they can send another job easily
        setForm({ ...form, message: '' });
        setTouched({});
      } else {
        setState('error');
        setErrMsg(
          error || 'Something went wrong. Please call 0469 097 690.'
        );
      }
    } catch (err: any) {
      setState('error');
      setErrMsg(
        err?.message || 'Something went wrong. Please call 0469 097 690.'
      );
    }
  }

  return (
    <section className="relative section-soft-surface rounded-[2rem] border border-slate-200/60 shadow-[0_50px_120px_-20px_rgba(0,0,0,0.25)] p-6 sm:p-10">
      {/* radial glow behind the form card */}
      <div className="surface-halo" />

      {/* success toast floating above form */}
      {state === 'success' && (
        <div className="absolute -top-10 left-0 right-0 flex justify-center">
          <div className="toast-success">
            ✅ Thanks! We’ve received your request.
          </div>
        </div>
      )}

      {/* header copy */}
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
          Request a fast quote
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
          Tell us about your roof, gutters or leak. We’ll get back quickly —
          no obligation, no pressure.
        </p>
      </div>

      {/* the actual form shell */}
      <form
        onSubmit={onSubmit}
        noValidate
        className="form-shell mt-8 p-6 sm:p-8 space-y-6"
      >
        {/* Name */}
        <div>
          <label className="field-label">
            <span className="field-icon">
              <User size={14} />
            </span>
            <span>Name</span>
          </label>
          <input
            className={decorate('name')}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            placeholder="Your name"
            required
          />
          {touched.name && errors.name && (
            <p className="error-text">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="field-label">
            <span className="field-icon">
              <Mail size={14} />
            </span>
            <span>Email</span>
          </label>
          <input
            className={decorate('email')}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            placeholder="you@example.com"
            required
          />
          {touched.email && errors.email && (
            <p className="error-text">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="field-label">
            <span className="field-icon">
              <Phone size={14} />
            </span>
            <span>Phone</span>
          </label>
          <input
            className={decorate('phone')}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            placeholder="0469 097 690"
            required
          />
          {touched.phone && errors.phone && (
            <p className="error-text">{errors.phone}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="field-label">
            <span className="field-icon">
              <MapPin size={14} />
            </span>
            <span>Address / Suburb</span>
          </label>
          <input
            className={decorate('address')}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            onBlur={() => setTouched((t) => ({ ...t, address: true }))}
            placeholder="Aldinga Beach, SA"
          />
        </div>

        {/* Job details */}
        <div>
          <label className="field-label">
            <span className="field-icon">
              <MessageSquare size={14} />
            </span>
            <span>Job Details</span>
          </label>
          <textarea
            className={decorate('message') + ' min-h-[120px]'}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            onBlur={() => setTouched((t) => ({ ...t, message: true }))}
            placeholder="Describe your roof/gutters (tile or iron, leaks, colour, etc.)"
            required
          />
          {touched.message && errors.message && (
            <p className="error-text">{errors.message}</p>
          )}
        </div>

        {/* Submit + reassurance */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          <button
            type="submit"
            disabled={state === 'sending'}
            className="btn-solid-lg"
          >
            <ShieldCheck size={18} className="mr-2" />
            {state === 'sending' ? 'Sending…' : 'Send Request'}
          </button>

          {state === 'error' && errMsg && (
            <div className="text-rose-500 text-sm font-medium">
              {errMsg}
            </div>
          )}

          {state !== 'error' && (
            <p className="form-helper-text">
              We’ll only use your details to respond to this quote request.
              Or call us now on{' '}
              <a
                className="text-slate-700 font-semibold"
                href="tel:0469097690"
              >
                0469 097 690
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
