"use client";

import { motion } from "framer-motion";
import { PlayCircle, Flower2, HelpingHand, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-28 min-h-screen bg-white overflow-hidden text-[#35332b]">
      
      {/* 🎥 Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/backgroun0.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      {/* 🎨 Camada de overlay suave com leve blur */}
      <div className="absolute inset-0 bg-[#E7e1d5]/70 backdrop-blur-sm" />

      {/* 🔰 Logo no topo */}
      <motion.header
        className="absolute top-6 left-4 sm:top-5"
        initial={{ opacity: 0, x: -45 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="text-[#171817] drop-shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-4xl  font-bold tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            7F<span className="text-[#ebb34e]">company</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-semibold ml-8 pt-1 text-gray-800">
            sua força digital !
          </p>
        </div>
      </motion.header>

      {/* 📦 Conteúdo principal */}
      <motion.div
        className="relative z-10 text-center max-w-2xl sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2e2c28] leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
          <span>Sua mente está gritando por ajuda.</span>
          <br />
          <span>Você vai continuar ignorando?</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#4b483f]">
          Acolhimento, escuta e transformação através da Terapia do Recomeço.
        </p>

        {/* 🔗 Botão CTA */}
        <motion.a
          href="#contato"
          className="mt-8 inline-flex items-center px-6 py-3 text-white bg-[#5DAE8B] rounded-full shadow-lg hover:bg-[#4b997a] transition-all duration-300 font-medium text-base drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] md:text-lg md:mt-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <PlayCircle className="mr-2 h-5 w-5 md:h-8 md:w-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]" />
          Agende sua sessão
        </motion.a>
      </motion.div>

      {/* ✅ Benefícios */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-6xl w-full px-4 sm:gap-12 sm:mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Benefit
          icon={<Flower2 className="h-8 w-8 sm:h-11 sm:w-11 text-[#a58e74] drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]" />}
          title="Ambiente acolhedor"
          description="Espaço seguro para se abrir, sem julgamentos, com empatia e humanidade."
        />
        <Benefit
          icon={<HelpingHand className="h-8 w-8 sm:h-11 sm:w-11  text-[#a58e74] drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]" />}
          title="Apoio emocional"
          description="Ferramentas práticas para lidar com ansiedade, medo, luto ou insegurança."
        />
        <Benefit
          icon={<Sparkles className="h-8 w-8 sm:h-11 sm:w-11  text-[#a58e74] drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]" />}
          title="Recomeço possível"
          description="Reconstrua sua autoestima, relações e propósito com leveza e clareza."
        />
      </motion.div>

      {/* ✨ Frase final */}
      <motion.div
        className="relative z-10 mt-16 sm:mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-xl font-semibold sm:text-2xl text-[#2e2c28] drop-shadow-sm">
          O recomeço começa em você. 
        </p>
      </motion.div>
    </section>
  );
}

type BenefitProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function Benefit({ icon, title, description }: BenefitProps) {
  return (
    <div className="flex items-start space-x-4 " >
      <div>{icon}</div>
      <div>
        <h4 className="font-semibold text-[#2e2c28] sm:text-lg md:text-xl">{title}</h4>
        <p className="text-[#4b483f] text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}
