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
  const href = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-emerald-500"
      style={{ right: offset, bottom: offset }}
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.span
        className="absolute inset-0 -z-10 rounded-full bg-emerald-400/20"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
      />
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-emerald-600 shadow-md">
        <MessageCircle className="h-4 w-4" />
      </span>
      <span>WhatsApp</span>
    </motion.a>
  );
}
