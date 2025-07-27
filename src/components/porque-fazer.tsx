'use client'

import { motion } from 'framer-motion'
import {  HeartPulse, BrainCog, Eye, Unlock } from 'lucide-react'
import Image from 'next/image'

const reasons = [
  {
    icon: <HeartPulse size={28} className="text-[#ba8566]" />,
    title: "Libere o que te prende",
    description: "A TRG atua direto nas emoções reprimidas. Alívio real, sem enrolação."
  },
  {
    icon: <BrainCog size={28} className="text-[#ba8566]" />,
    title: "Entenda sua mente",
    description: "Descubra o porquê dos seus padrões e como quebrá-los de forma consciente."
  },
  {
    icon: <Eye size={28} className="text-[#ba8566]" />,
    title: "Enxergue quem você é",
    description: "Sem máscaras, sem medo. Você encontra sua essência no processo."
  },
  {
    icon: <Unlock size={28} className="text-[#ba8566]" />,
    title: "Desbloqueie sua vida",
    description: "Dê o próximo passo com segurança e paz, abrindo novas possibilidades."
  },
]

export const WhyTRGSection = () => {
  return (
    <section className="bg-[#f5f0e8] py-24 px-6 mb-4 shadow-2xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-14">

        {/* Texto sofisticado com impacto emocional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="uppercase tracking-widest text-[#a58e74] font-medium text-sm md:text-lg">
            por que fazer terapia TRG?
          </span>
          <h2 className="text-4xl font-bold text-[#2e2c28]  mt-3 leading-tight">
            A jornada que muda tudo, quando começa.
          </h2>
          <p className="text-[#3f3e3a] text-lg mt-5 mb-8 leading-relaxed md:text-xl">
            A Terapia de Reprocessamento Generativo (TRG) é mais do que uma conversa: é uma imersão no que há de mais profundo em você. Ideal para quem deseja leveza emocional, clareza mental e conexão real com a própria essência.
          </p>

          <div className="space-y-6">
            {reasons.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#2e2f2a] md:text-xl">{item.title}</h4>
                  <p className="text-[#555248]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Imagem com efeito de brilho suave */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="rounded-3xl overflow-hidden shadow-xl bg-red-300 md:h-[590px]"
        >
           <Image
            src='/images/liberte-se.png'
            alt='background'
            width={1000}
            height={500}
            priority
            className='h-full w-full object-cover'
           />
         
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
