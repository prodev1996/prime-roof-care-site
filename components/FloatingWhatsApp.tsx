'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({
  phone,
  message,
  offset = 20,
}: {
  phone: string;
  message: string;
  offset?: number;
}) {
  const href = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 rounded-full bg-emerald-500 text-white font-semibold shadow-card flex items-center gap-2 pr-4 pl-3 py-2 text-sm hover:bg-emerald-400 transition"
      style={{ right: offset, bottom: offset }}
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <span className="inline-flex h-7 w-7 rounded-full bg-white text-emerald-600 items-center justify-center shadow-card">
        <MessageCircle className="h-4 w-4" />
      </span>
      <span>WhatsApp</span>
    </motion.a>
  );
}
