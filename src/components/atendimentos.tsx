'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Home, Video } from 'lucide-react'

export const Atendimento = () => {
  return (
    <section className='bg-[#E7e1d5] p-4'>
    <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10 bg-[#E7e1d5] rounded-3xl shadow-2xl overflow-hidden">
      
      {/* Foto do terapeuta */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-4 border-[#a58e74]">
          <Image
            src="/images/terapeuta.jpg" // Troque pelo caminho real da sua imagem
            alt="Foto do Terapeuta"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Conteúdo textual */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col gap-10"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#2e2c28] ">
          Atendimento Presencial e Online.
        </h2>

        <div className="flex items-start gap-4 bg-white p-3 rounded-xl shadow border border-[#e1dcd0]">
          <Home className="text-[#e09132]" size={32} />
          <div>
            <h3 className="text-xl font-semibold text-[#424530]">Presencial</h3>
            <p className="text-[#555] leading-relaxed text-base">
              Sessões em um ambiente acolhedor, silencioso e preparado para receber você com todo cuidado e empatia.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow border border-[#e1dcd0]">
          <Video className="text-[#e09132]" size={32} />
          <div>
            <h3 className="text-xl font-semibold text-[#424530]">Online</h3>
            <p className="text-[#555] leading-relaxed text-base">
              A mesma escuta atenta e suporte emocional no conforto da sua casa. Seguro, flexível e acessível.
            </p>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
