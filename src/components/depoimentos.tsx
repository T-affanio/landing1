'use client';

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marina Oliveira",
    role: "São Paulo - SP",
    image: "/avatars/marina.jpg",
    content:
      "Eu estava perdida em um ciclo de angústia e dúvidas. A terapia TRG foi a luz no fim do túnel que eu tanto precisava. Hoje, sinto que reencontrei minha força e aprendi a me amar de verdade.",
  },
  {
    name: "Lucas Andrade",
    role: "Belo Horizonte - MG",
    image: "/avatars/lucas.jpg",
    content:
      "Por anos carreguei traumas que me paralisavam. Quando comecei a terapia, achava que seria só mais uma tentativa. Mas a TRG me ajudou a enfrentar meus medos de frente e reconstruir minha vida com coragem.",
  },
  {
    name: "Bruna Costa",
    role: "Curitiba - PR",
    image: "/avatars/bruna.jpg",
    content:
      "Cada sessão foi um abraço acolhedor para minha alma cansada. A TRG me deu ferramentas para libertar emoções represadas e finalmente respirar aliviada. É um renascimento pessoal que jamais imaginei viver.",
  },
  {
    name: "Eduardo Mendes",
    role: "Rio de Janeiro - RJ",
    image: "/avatars/eduardo.jpg",
    content:
      "Sentia um vazio e uma solidão que me consumiam. Através da TRG, descobri que não estou sozinho e que posso construir uma nova história, com mais significado e esperança. Essa terapia mudou meu destino.",
  },
  {
    name: "Ana Beatriz Lima",
    role: "Recife - PE",
    image: "/avatars/ana.jpg",
    content:
      "A TRG não só transformou minha mente, mas também meu coração. Aprendi a olhar para mim com mais compaixão e a encarar os desafios com resiliência. Hoje vivo mais leve, feliz e em paz comigo mesma.",
  },
];

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const total = testimonials.length;

  function next() {
    setStartIndex((prev) => mod(prev + 1, total));
  }

  function prev() {
    setStartIndex((prev) => mod(prev - 1, total));
  }

  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleTestimonials.push(testimonials[mod(startIndex + i, total)]);
  }

  return (
    <section className="bg-[#f5f0e8] p-10">
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#f5f0e8] shadow-2xl select-none px-6 py-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-[#2e2c28]  text-center">
          Histórias Reais de Transformação
        </h2>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
          {/* Botão anterior */}
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="hidden  md:flex items-center justify-center p-3 rounded-full bg-[#7aa172] hover:bg-green-700 text-white shadow-lg transition-colors duration-300 cursor-pointer select-none text-2xl font-bold "
          >
            ‹
          </button>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
            {visibleTestimonials.map((item, i) => (
              <motion.div
                key={mod(startIndex + i, total)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-[320px] bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center"
              >
                <Avatar className="w-20 h-20 mb-6 border-4 border-[#7aa172] rounded-full shadow-md">
                  <AvatarImage src={item.image} alt={item.name} />
                  <AvatarFallback>
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <p className="text-[#3b3b3b] italic mb-6 leading-relaxed text-sm sm:text-base">
                  “{item.content}”
                </p>

                <div>
                  <p className="font-semibold text-[#2e2e2e] text-lg">{item.name}</p>
                  <p className="text-[#ba8566] text-sm">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botão próximo */}
          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="hidden md:flex items-center justify-center p-3 rounded-full bg-[#7aa172] hover:bg-green-700 text-white shadow-lg transition-colors duration-300 cursor-pointer select-none text-2xl font-bold"
          >
            ›
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-3 mt-10 flex-wrap">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              className={`w-4 h-4 rounded-full transition-colors ${
                i === startIndex
                  ? "bg-[#7aa172]"
                  : "bg-zinc-300 hover:bg-[#a58e74]"
              }`}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
