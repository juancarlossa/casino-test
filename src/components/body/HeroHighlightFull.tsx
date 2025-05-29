'use client'
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react";
import { MotionButton } from "@/components/ui/button";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { TextAnimate } from "../magicui/text-animate";
import { container, item } from "@/lib/animations";
import { VideoHero } from "../juankui/video-hero";

export function HeroHighlightFull () {
  return (
    <section className="size-full relative">
      {<VideoHero />}
      <HeroHighlight className="flex h-[90vh] w-full flex-col items-start justify-center gap-y-5 lg:w-[60vw]">
        {/*<div className="relative flex h-[90vh] w-full flex-col items-start justify-center gap-y-5 lg:w-[60vw]">*/}
        <div className="relative lg:w-[40vw] w-full flex flex-col">
          <TextAnimate as='h1' className="lg:text-4xl text-md" animation="blurInUp" by="word" once>
            Casino Dinero Real:
          </TextAnimate>
          <TextAnimate as='h1' duration={1} delay={1} className="lg:text-4xl text-sm text-indigo-200" animation="blurInUp" by="word" once>
            Guía Completa para apostar con Seguridad y Diversión
          </TextAnimate>

          <TextAnimate delay={3} duration={2} as='p' className="lg:text-md text-xs pt-2" animation="blurInUp" by="word" once>
            Los casinos online con dinero real han experimentado un crecimiento exponencial en España durante los últimos años, consolidándose como una de las formas de entretenimiento digital más populares.
          </TextAnimate>
        </div>


        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-row gap-x-5">

          <a href="#top">
            <MotionButton variants={item} variant="default" className="flex sm:w-full md:w-fit lg:w-fit"
              onClick={() => {
                const el = document.getElementById('top');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
              Ver mejores casinos <ChevronRight className="ml-1" />
            </MotionButton>
          </a>

          <a href="#comoelegir">
            <MotionButton variants={item} variant="outline" className="flex sm:w-full md:w-fit lg:w-fit">
              Guia para elegir
            </MotionButton>
          </a>
        </motion.div>
      </HeroHighlight>
    </section>
  )
}