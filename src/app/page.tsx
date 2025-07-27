import { Atendimento } from "@/components/atendimentos";
import { SessaoTerapia } from "@/components/chamada";
import { TestimonialsSection } from "@/components/depoimentos";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { WhyTRGSection } from "@/components/porque-fazer";
import { PorqueTRG } from "@/components/Porque-Trg";
import { AboutTherapy } from "@/components/sobre-Trg";
import { AboutMe } from "@/components/Terapeuta";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Atendimento/>
      <SessaoTerapia/>
      <WhyTRGSection/>
      <PorqueTRG/>
      <AboutTherapy/>
      <AboutMe/>
      <TestimonialsSection/>
      <Footer/>
      
    </div>
  );
}
