import { ShieldCheck, CheckCircle, Star } from "lucide-react";
import { Section } from "../layout/Section";
import { MagicCard } from "../magicui/magic-card";
import { ShinyButton } from "../magicui/shiny-button";
import Image from "next/image";

const ventajas = [
  {
    numero: 1,
    titulo: "Accesibilidad 24/7",
    descripcion: "Desde cualquier dispositivo con conexión a internet"
  },
  {
    numero: 2,
    titulo: "Mayor variedad de juegos",
    descripcion: "Miles de opciones imposibles en casinos físicos"
  },
  {
    numero: 3,
    titulo: "Bonos exclusivos",
    descripcion: "Promociones que multiplican tu presupuesto inicial"
  },
  {
    numero: 4,
    titulo: "Límites de apuesta flexibles",
    descripcion: "Adaptados a todo tipo de presupuestos"
  }
];

const criterios = [
  {
    numero: 1,
    titulo: "Licencia DGOJ activa",
    descripcion: "Requisito no negociable para jugar legalmente"
  },
  {
    numero: 2,
    titulo: "Métodos de pago seguros",
    descripcion: "Variedad de opciones con condiciones transparentes"
  },
  {
    numero: 3,
    titulo: "Software de calidad",
    descripcion: "De proveedores reconocidos internacionalmente"
  },
  {
    numero: 4,
    titulo: "Política de juego responsable",
    descripcion: "Con herramientas efectivas de autocontrol"
  }
];

const tips = [
  {
    title: "1. Inicia con un presupuesto definido",
    points: [
      "Establece una cantidad que puedas permitirte perder",
      "Utiliza las herramientas de límite de depósito",
      "Nunca juegues con dinero destinado a necesidades básicas"
    ]
  },
  {
    title: "2. Aprovecha los bonos inteligentemente",
    points: [
      "Lee detenidamente los términos y condiciones",
      "Prioriza bonos con requisitos de apuesta razonables (x20-x35)",
      "Considera el plazo de cumplimiento (mínimo 30 días recomendado)"
    ]
  },
  {
    title: "3. Familiarízate con los juegos",
    points: [
      "Utiliza modos demo siempre que estén disponibles",
      "Comienza con apuestas mínimas para entender las mecánicas",
      "Aprende las reglas básicas y estrategias de juegos como blackjack o ruleta"
    ]
  },
  {
    title: "4. Gestiona tus emociones",
    points: [
      "Establece límites de tiempo para tus sesiones de juego",
      "Acepta que perder forma parte de la experiencia",
      "No intentes recuperar pérdidas aumentando apuestas (estrategia \"martingala\")"
    ]
  }
];
export function Conclusiones () {
  return (
    <Section
      title="Conclusiones y Recomendaciones Finales"
      description="Nuestras recomendaciones finales para que disfrutes de una experiencia de juego segura y satisfactoria."
    >

      <div id="conclusiones" className="border border-indigo-700 grid grid-cols-2 gap-6 rounded-xl p-6 shadow-md ">
        <div>
          <h4 className="mb-4 text-md font-semibold">
            <CheckCircle className="mr-2 inline-block text-green-600" />
            Ventajas principales de los casinos online
          </h4>
          {ventajas.map((v) => (
            <div key={v.numero} className="mb-2">
              <p className="font-semibold text-green-600">
                {v.numero}. {v.titulo}
              </p>
              <p className="ml-5 text-xs">{v.descripcion}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">
            <ShieldCheck className="mr-2 inline-block text-yellow-400" />
            Criterios esenciales para una elección segura
          </h3>
          {criterios.map((c) => (
            <div key={c.numero} className="mb-2">
              <p className="font-semibold text-yellow-400">
                {c.numero}. {c.titulo}
              </p>
              <p className="ml-5 text-xs">{c.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export function PracticalTips () {
  return (
    <Section
      title="Consejos Prácticos para Empezar a Apostar">
      <span id="consejos-practicos" role="img" aria-label="fire">🔥</span>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {tips.map((tip, idx) => (
          <div key={idx} className="rounded-xl bg-indigo-900 border border-indigo-400 shadow-md shadow-indigo-600 p-5 hover:scale-105 transition duration-300">
            <h4 className="mb-2 text-sm font-semibold text-yellow-300">{tip.title}</h4>
            <ul className="space-y-2">
              {tip.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-xs">
                  <CheckCircle className=" h-4 w-4 text-green-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg bg-green-800 border border-indigo-400 shadow-2xl shadow-indigo-600  p-4 text-indigo-200 hover:scale-105 transition duration-300">
        <strong>Recuerda:</strong> <br />
        El objetivo principal es disfrutar de la experiencia de manera responsable. Los casinos online con dinero real ofrecen entretenimiento de calidad cuando se abordan con la actitud y conocimientos adecuados.
      </div>
    </Section>
  );
}

const casinos = [
  {
    rank: 1,
    name: "Casino777",
    rating: 4.8,
    bonus: "100% hasta 150€",
    cta: "Ir a Casino777",
    logo: "/svg/casino777.svg"
  },
  {
    rank: 2,
    name: "Sportium",
    rating: 4.6,
    bonus: "100% hasta 200€",
    cta: "Ir a Sportium",
    logo: "/svg/sportium.svg"
  },
  {
    rank: 3,
    name: "Casumo",
    rating: 4.7,
    bonus: "100% hasta 300€",
    cta: "Ir a Casumo",
    logo: "/svg/casumo.svg"
  },
  {
    rank: 4,
    name: "LeoVegas",
    rating: 4.3,
    bonus: "200% hasta 200€",
    cta: "Ir a LeoVegas",
    logo: "/svg/leovegas.svg"
  },
  {
    rank: 5,
    name: "Luckia",
    rating: 4.5,
    bonus: "100% hasta 100€",
    cta: "Ir a Luckia",
    logo: "/svg/luckia.svg"
  },
];

export function RecomendacionesFinales () {
  return (
    <Section
      title="Nuestras Recomendaciones Finales"
    >
      <article id="recomendaciones-finales" className="space-y-6">


        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {casinos.map((casino) => (
            <MagicCard key={casino.rank} className="duration-400 flex h-[300px] transform flex-col items-center justify-between rounded-lg p-8 transition hover:z-50 hover:scale-105">

              <Image src={casino.logo} alt={casino.name} width={100} height={40} />
              <div className="flex w-full flex-col gap-y-3">
                <div className="text-muted-foreground text-sm flex items-start gap-x-1">
                  <p>Rating: {casino.rating} </p>
                  <StarSvg />
                </div>
                <div className="text-xs">{casino.bonus}</div>
              </div>


              <ShinyButton className="hover:shadow-xs duration-400 transform bg-gradient-to-br from-amber-700 to-indigo-600 shadow-[#FE8BBB] transition hover:from-amber-500">
                {casino.cta}
              </ShinyButton>
            </MagicCard>
          ))}
        </div>
      </article>
    </Section>
  );
}

export function StarSvg () {
  return (
    <Star className="h-4 w-4 text-yellow-400 pt-[3px]" fill="oklch(85.2% 0.199 91.936)" />
  )
}