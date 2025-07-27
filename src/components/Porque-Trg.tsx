"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Eye, Brain, Undo2 } from "lucide-react";

export function PorqueTRG() {
  const motivos = [
    {
      icon: <Eye className="w-7 h-7 text-[#ba8566]" />,
      title: "Acesse suas camadas mais profundas",
      description:
        "TRG vai além da conversa. Ela resgata memórias emocionais que travam sua vida sem você perceber.",
    },
    {
      icon: <Undo2 className="w-7 h-7 text-[#ba8566]" />,
      title: "Quebre ciclos emocionais repetitivos",
      description:
        "Se você sente que está sempre no mesmo ponto, talvez seja a hora de desbloquear o que te prende no passado.",
    },
    {
      icon: <Brain className="w-7 h-7 text-[#ba8566]" />,
      title: "Resete traumas antigos com segurança",
      description:
        "A TRG atua direto no sistema límbico do cérebro, liberando dores reprimidas e gerando alívio real.",
    },
    {
      icon: <HeartHandshake className="w-7 h-7 text-[#ba8566]" />,
      title: "Reconstrua sua autoestima e relacionamentos",
      description:
        "Quando você se cura por dentro, o mundo ao seu redor muda. Relações mais saudáveis começam em você.",
    },
  ];

  return (
    <section className="bg-[#E7e1d5] py-24 px-6  mb-4 shadow-2xl">
      <div className="max-w-7xl mx-auto text-center rounded-md">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#2e2c28]  mb-6"
        >
          Por Que Você Precisa Fazer Terapia TRG?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#7a6b5a] text-lg md:text-xl max-w-2xl mx-auto mb-16"
        >
          TRG é uma experiência profunda de autoconhecimento que vai direto na raiz emocional do seu sofrimento.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {motivos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-[#a58e74] rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#424530] mb-2 md:text-2xl">{item.title}</h3>
              <p className="text-[#6b5e51] text-sm leading-relaxed md:text-lg">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <p className="text-base sm:text-xl md:text-2xl text-[#424530] font-medium">
            Não é sobre falar de problemas — é sobre se libertar da dor que você carrega sem nem perceber.
            <br />
            <span className="font-bold text-xl sm:text-2xl md:text-3xl  text-[#353a33] ">Você merece leveza. Você merece paz.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
