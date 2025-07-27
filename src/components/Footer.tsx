import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa6'

export const Footer = () => {
   return (
      <footer className="bg-black/90 text-gray-100 py-10 px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Logotipo */}
            <div className='drop-shadow-lg"'>
               <h1 className="text-3xl sm:text-4xl font-bold tracking-tight sm:mb-5">7F<span className="text-[#ebb34e] drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">company</span></h1>
               <p className="text-sm text-gray-400">
                  Terapia de Reprocessamento Generativo • Cura emocional com acolhimento, consciência e presença{' '}
               </p>
            </div>
            {/* contato */}
            <div>
               <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
               <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                     <FaWhatsapp className="text-green-400" />
                     <Link
                        href="https://wa.me/41999111?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Terapia%20TRG."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                     >
                        WhatsApp
                     </Link>
                  </li>
                  <li className='flex items-center gap-3'>
                        <FaEnvelope className='text-neutral-300'/>
                        <a href="mailto:contato@rosangelatrg.com" className="hover:underline">
                        contato@seuemail.com
                     </a>
                  </li>
               </ul>
            </div>
            {/* Redes sociais */}
            <div >
                <h3 className='text-lg font-semibold mb-3 text-white'>Rede Sociais</h3>
                <div className='md:gap-3 sm:flex '>
                    <div className='flex m-2'>
                    <Link 
                    href='https://www.instagram.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-pink-500 transition'
                    >
                        <FaInstagram size={22}/>
                        
                    </Link>
                </div>
                <div className='flex gap-4 m-2'>
                    <Link 
                    href='https://www.instagram.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-blue-500 transition'
                    >
                        <FaFacebook size={22}/>
                        
                    </Link>
                </div>
                </div>
                
            </div>
         </div>
      </footer>
   )
}
