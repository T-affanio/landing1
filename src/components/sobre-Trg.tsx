"use client";

import { motion } from "framer-motion";
import { HeartPulse, BrainCog, Sparkles, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <HeartPulse size={34} />,
    title: "Emoções liberadas",
    description:
      "Deixe a dor no passado. Comece a se sentir mais leve e em paz.",
  },
  {
    icon: <BrainCog size={34} />,
    title: "Mente reprogramada",
    description: "Reestruture pensamentos e crenças que te sabotam há anos.",
  },
  {
    icon: <Sparkles size={34} />,
    title: "Vida com mais propósito",
    description: "Reconecte-se com o que realmente importa pra você.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Método seguro e eficaz",
    description:
      "Baseado em ciência e prática clínica real com centenas de pacientes.",
  },
];

export function AboutTherapy() {
  return (
    <section className="bg-[#F5F1EA]  min-h-screen py-24 px-6 shadow-2xl mb-4">
      <div className="max-w-7xl mx-auto text-center rounded-md">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#2e2c28]  leading-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Algo dentro de você ainda está preso?
          <br />
          <span className="text-[#866c5f]">
            A TRG pode ser o ponto de virada na sua jornada emocional.
          </span>
        </motion.h2>

        <motion.p
          className="text-[#7b6f66] text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          A Terapia TRG atua direto na raiz das dores emocionais. Um processo profundo e transformador para quem busca paz interior, liberdade emocional e um novo começo.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-sm border border-[#dfd4c7] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-4 rounded-full bg-[#fff5e7] border border-[#d5c7b8] text-[#ba8566]">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#3a3a38] mb-1">
                  {item.title}
                </h3>
                <p className="text-[#6c625b] text-sm sm:text-base md:text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
