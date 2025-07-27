"use client";

import { motion } from "framer-motion";
import { Heart, Smile, Sun } from "lucide-react";

export const SessaoTerapia = () => {
  const beneficios = [
    {
      icon: <Heart className="text-[#ba8566]" size={28} />,
      titulo: "Autoconhecimento",
      texto: "Descubra suas emoções, padrões e fortalezas através de um espaço seguro e acolhedor.",
    },
    {
      icon: <Smile className="text-[#ba8566]" size={28} />,
      titulo: "Bem-estar emocional",
      texto: "Aprenda a lidar com ansiedade, estresse e conflitos com mais leveza e consciência.",
    },
    {
      icon: <Sun className="text-[#ba8566]" size={28} />,
      titulo: "Transformação de Vida",
      texto: "Construa uma jornada mais consciente, conectada com seus valores e propósitos.",
    },
  ];

  return (
    <section className="bg-[#f5f0e8] px-4 py-20 mb-4 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#2e2c28] "
        >
          A Terapia Pode Transformar a Sua Vida
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 w-full">
          {beneficios.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#fff] border border-[#e7e1d5] rounded-2xl p-6 shadow-md text-left flex flex-col gap-4"
            >
              <div>{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#2e2f2a]">{item.titulo}</h3>
              <p className="text-[#555] leading-relaxed text-base">{item.texto}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="https://wa.me/5541999999999?text=Olá, gostaria de agendar uma sessão de terapia"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#6D7D68] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#5a6b56] transition duration-300 sm:text-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Agendar Sessão
        </motion.a>
      </div>
    </section>
  );
};
