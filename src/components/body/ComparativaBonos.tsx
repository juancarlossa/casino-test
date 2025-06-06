'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Section } from "../layout/Section";
import { NeonGradientCard } from "../magicui/neon-gradient-card";
import { Gift, Coins, ExternalLink, RefreshCcw, Timer } from "lucide-react";
import { ShinyButton } from "../magicui/shiny-button";

const bonos = [
  {
    nombre: "Casino777",
    logo: "/svg/casino777.svg",
    bono: "€150",
    detalle: "100% hasta",
    giros: "77 giros",
    requisitos: "x30",
    tiempo: "30 días",
    link: "#",
  },
  {
    nombre: "Sportium",
    logo: "/svg/sportium.svg",
    bono: "€200",
    detalle: "+€10 sin depósito",
    giros: "-",
    requisitos: "x35",
    tiempo: "7 días",
    link: "#",
  },
  {
    nombre: "Casumo",
    logo: "/svg/casumo.svg",
    bono: "€300",
    detalle: "100% hasta",
    giros: "20 giros",
    requisitos: "x30",
    tiempo: "30 días",
    link: "#",
  },
  {
    nombre: "Leovegas",
    logo: "/svg/leovegas.svg",
    bono: "€100",
    detalle: "50% hasta",
    giros: "10 giros",
    requisitos: "x25",
    tiempo: "14 días",
    link: "#",
  },
  {
    nombre: "Luckia",
    logo: "/svg/luckia.svg",
    bono: "€120",
    detalle: "Sin depósito",
    giros: "15 giros",
    requisitos: "x20",
    tiempo: "10 días",
    link: "#",
  },
];

const headers = [
  { label: "Casino", icon: <Coins className="h-4 w-4" /> },
  { label: "Bono", icon: <Gift className="h-4 w-4" /> },
  { label: "Giros", icon: <RefreshCcw className="h-4 w-4" /> },
  { label: "Requisitos", icon: <ExternalLink className="h-4 w-4" /> },
  { label: "Tiempo", icon: <Timer className="h-4 w-4" /> },
  { label: "Visitar", icon: <ExternalLink className="h-4 w-4" /> }
];

export function ComparativaBonos () {
  const [showMore, setShowMore] = useState(false);
  const bonosVisibles = showMore ? bonos : bonos.slice(0, 3);

  return (
    <Section
      title="Comparativa de Bonos de Bienvenida"
      gradientBackground="bg-gradient-middle"
    >
      <NeonGradientCard className="text-sm" id="comparativa-bonos">
        <div className="bg-muted text-muted-foreground hidden grid-cols-6 gap-4 rounded-t-md px-4 py-3 font-semibold sm:grid">
          {headers.map(({ label, icon }) => (
            <span key={label} className="flex items-center justify-center gap-2 text-yellow-400">
              {icon} {label}
            </span>
          ))}
        </div>

        {bonosVisibles.map((casino) => (
          <div key={casino.nombre} className="">
            {/*logo VERSION MOVIL*/}
            <div className="relative mx-auto mb-3 mt-8 h-[40px] w-full items-center justify-center md:hidden">
              <Image src={casino.logo} alt={casino.nombre} fill className="object-contain" />
            </div>
            {/*logo VERSION MOVIL*/}
            <div

              className="grid grid-cols-4 items-center justify-center gap-4 border-t border-slate-800 px-4 py-4 lg:grid-cols-6"
            >
              {/*VERSION PC*/}
              <div className="size-full relative hidden items-center justify-center md:block">
                <Image src={casino.logo} alt={casino.nombre} fill className="object-contain" />
              </div>
              {/*VERSION PC*/}

              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold">{casino.bono}</p>
                <p className="text-muted-foreground text-center text-xs">{casino.detalle}</p>
              </div>

              <p className="text-center">{casino.giros}</p>
              <p className="text-center">{casino.requisitos}</p>
              <p className="text-center">{casino.tiempo}</p>
              <ShinyButton className="hover:shadow-xs duration-400 hidden transform bg-gradient-to-br from-amber-700 to-indigo-600 shadow-[#FE8BBB] transition hover:from-amber-500 md:block">
                {casino.nombre}
              </ShinyButton>

            </div>
            <ShinyButton className="hover:shadow-xs duration-400 block w-full transform bg-gradient-to-br from-amber-700 to-indigo-600 shadow-[#FE8BBB] transition hover:from-amber-500 md:hidden">
              Ir a {casino.nombre}
            </ShinyButton>
          </div>
        ))}

      </NeonGradientCard>

      {!showMore && (
        <div className="mt-6 text-center">
          <Button variant={'outline'} onClick={() => setShowMore(true)}>
            Ver los 5 Bonos Completos
          </Button>
        </div>
      )}
    </Section>
  );
}