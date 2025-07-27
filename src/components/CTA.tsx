"use client";

import { FaWhatsapp } from "react-icons/fa";



export default function WhatsAppButton() {
  const url = `https://wa.me/41999111?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Terapia%20TRG."`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp size={40} />
    </a>
  );
}
