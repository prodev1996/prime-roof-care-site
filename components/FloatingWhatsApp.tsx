"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp({
  phone,
  message,
  offset = 20,
}: {
  phone: string;
  message: string;
  offset?: number;
}) {
  const phoneDigits = phone.replace(/\D/g, "");
  const formattedPhone = phoneDigits.startsWith("61")
    ? phoneDigits
    : "61" + phoneDigits.slice(1);
  const href = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center gap-2 rounded-full bg-[#12342d] px-4 py-2 text-sm font-black text-white shadow-[0_18px_45px_rgba(18,52,45,0.28)] ring-2 ring-[#d99a2b]/30 transition hover:bg-[#0f8a62]"
      style={{ right: offset, bottom: offset }}
      initial={{ scale: 0.82, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.span
        className="absolute inset-0 -z-10 rounded-full bg-[#d99a2b]/25"
        animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut" }}
      />
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d99a2b] text-[#14201d] shadow-md">
        <MessageCircle className="h-4 w-4" />
      </span>
      <span>WhatsApp</span>
    </motion.a>
  );
}
