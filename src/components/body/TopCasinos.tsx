
import Image from "next/image";
import { Section } from "../layout/Section";
import { MagicCard } from "../magicui/magic-card";
import { ShinyButton } from "../magicui/shiny-button";

const casinos = [
  {
    rank: 1,
    name: "Casino777",
    rating: 4.8,
    bonus: "100% hasta 150€",
    cta: "Casino777",
    logo: "/svg/casino777.svg"
  },
  {
    rank: 2,
    name: "Sportium",
    rating: 4.6,
    bonus: "100% hasta 200€",
    cta: "Sportium",
    logo: "/svg/sportium.svg"
  },
  {
    rank: 3,
    name: "Casumo",
    rating: 4.7,
    bonus: "100% hasta 300€",
    cta: "Casumo",
    logo: "/svg/casumo.svg"
  },
  {
    rank: 4,
    name: "LeoVegas",
    rating: 4.3,
    bonus: "200% hasta 200€",
    cta: "LeoVegas",
    logo: "/svg/leovegas.svg"
  },
  {
    rank: 5,
    name: "Luckia",
    rating: 4.5,
    bonus: "100% hasta 100€",
    cta: "Luckia",
    logo: "/svg/luckia.svg"
  },
];

export function TopCasinos () {
  return (
    <Section
      title="Top 5 Mejores Casinos Online en España"
      description="Hemos analizado en profundidad las principales plataformas para ayudarte a elegir la que mejor se adapte a tus preferencias."
      gradientBackground="bg-gradient-top"
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5" id="top">
        {casinos.map((casino) => (
          <MagicCard key={casino.rank} className="duration-400 flex h-[300px] transform flex-col items-center justify-between rounded-lg p-8 transition hover:z-50 hover:scale-105">

            <Image src={casino.logo} alt={casino.name} width={100} height={60} />

            <div className="flex flex-col gap-y-3">
              <div className="text-md font-semibold">{casino.name}</div>
              <div className="text-muted-foreground text-sm">Rating: {casino.rating}</div>
              <div className="text-xs">{casino.bonus}</div>
            </div>
            <ShinyButton className="hover:shadow-xs duration-400 transform bg-gradient-to-br from-amber-700 to-indigo-600 shadow-[#FE8BBB] transition hover:from-amber-500">
              Visitar {casino.cta}
            </ShinyButton>


          </MagicCard>
        ))}
      </div>
    </Section>
  );
}
