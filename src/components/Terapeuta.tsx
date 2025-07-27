"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarHeart } from "lucide-react";

export const AboutMe = () => {
  return (
    <section className="bg-[#e7e1d5] px-4 py-24 mb-4 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12  bg-[#f4ede2] shadow-xl p-10 md:p-16 rounded-md">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-[60%] rounded-2xl overflow-hidden shadow-lg md:h-[600px]"
        >
          <Image
            src="/images/terapeuta.jpg"
            alt="Foto da terapeuta Rosângela"
            width={500}
            height={600}
            className="object-cover w-full h-auto rounded-2xl"
            priority
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-[60%] text-[#3b3b3b] space-y-6"
        >
          <h2 className="text-4xl font-bold leading-tight text-[#2e2c28] ]">
            Quem Sou Eu
          </h2>

          <p className="text-lg leading-relaxed md:text-xl">
            Olá! Eu sou <strong className="text-[#2b2b2b]">Rosângela</strong>,
            terapeuta especializada em{" "}
            <span className="font-semibold">
              TRG – Terapia de Reprocessamento Generativo
            </span>
            . Minha missão é ajudar pessoas a se reconectarem com suas emoções e
            transformarem suas histórias com acolhimento e sensibilidade.
          </p>

          <p className="text-lg leading-relaxed md:text-xl">
            Com uma trajetória dedicada ao cuidado emocional, ofereço um espaço
            seguro e acolhedor para você iniciar sua jornada de cura com leveza,
            autonomia e respeito à sua essência.
          </p>

          <p className="text-lg md:text-xl font-semibold text-[#7aa172]">
            Se você sente que é hora de mudar, eu estou aqui pra caminhar ao seu
            lado.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                'https://wa.me/41999111?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Terapia%20TRG."',
                "_blank"
              )
            }
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-3 bg-[#7aa172] hover:bg-[#6e9468] text-white px-8 py-4 rounded-full text-base font-semibold shadow-md transition-all duration-300 sm:text-lg md:text-3xl"
          >
            <CalendarHeart size={28} />
            Agende sua sessão
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
