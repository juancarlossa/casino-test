import { ParticlesFull } from "@/components/juankui/particles";
import { Span } from "@/components/juankui/span";
import { MagicCard } from "@/components/magicui/magic-card";
import { ShineBorder } from "@/components/magicui/shine-border";
import Image from "next/image";

export default function AboutPage () {
  return (
    <>
      {/* Sección: Quiénes Somos */}
      <ParticlesFull />
      <section id="sobre-nosotros" className="bg-gradient-to-b from-indigo-800 to-indigo-950 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col space-y-4 text-center">
            <h1 className="text-xl font-bold md:text-4xl">Quiénes Somos</h1>
            <Span />
            <p className="text-md lg:text-md mx-auto">
              Expertos en la evaluación y análisis de casinos online en España, comprometidos con la transparencia y el juego responsable.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16"></div>
      </section>

      {/* Sección: Nuestra Historia */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex flex-col space-y-4">
              <h2 className="mb-3 text-3xl font-bold">Nuestra Historia</h2>
              <Span className="ml-0" />
              <p className="mb-4">
                Anced nació en 2018 de la mano de un grupo de apasionados por los juegos de azar online que detectaron la necesidad de ofrecer información imparcial y de calidad.
              </p>
              <p className="mb-4">
                Tras años de experiencia en el sector, decidimos unir fuerzas para crear una plataforma que ayudara a los jugadores españoles a tomar decisiones informadas.
              </p>
              <p className="">
                Hoy, Anced se ha convertido en un referente en la evaluación de casinos online, con miles de usuarios que confían en nuestras recomendaciones.
              </p>
            </div>
            <div className="duration-400 group relative aspect-[16/9] w-full max-w-xl cursor-pointer overflow-hidden rounded-xl border border-indigo-400 shadow-xl transition hover:border-amber-200">
              <Image
                src="/office.png"
                alt="Oficinas de Anced"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 z-10 rounded-xl bg-indigo-800/60 transition duration-500 ease-in-out group-hover:bg-amber-900/10" />
              <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center rounded-full bg-indigo-600/90 px-3 py-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="text-lg font-semibold text-white">Oficinas de Anced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Nuestros Valores */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col space-y-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Nuestros Valores</h2>
            <Span />
            <p className="text-md mx-auto max-w-3xl">
              Los principios que guían nuestro trabajo y nos permiten ofrecer el mejor servicio a nuestros usuarios.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Integridad",
                desc: "Nos comprometemos a ofrecer información veraz y objetiva.",
                icon: "shield"
              },
              {
                title: "Excelencia",
                desc: "Buscamos la excelencia en cada análisis, investigación y recomendación.",
                icon: "award"
              },
              {
                title: "Responsabilidad",
                desc: "Promovemos el juego responsable y seguro.",
                icon: "target"
              }
            ].map((val, idx) => (
              <MagicCard key={idx} className="bg-card-contacto flex items-center justify-center rounded-xl shadow-md">
                <ShineBorder className="rounded-xl p-8" shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                <div className="flex flex-col p-8">
                  <div className="flex flex-row items-center gap-x-5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-400">
                      <i className={`lucide lucide-${val.icon} w-6 h-6 `} />
                    </div>
                    <h3 className="mb-3 text-center font-bold lg:text-lg">{val.title}</h3>
                  </div>
                  <p className="">{val.desc}</p>
                </div>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Más secciones aquí… */}
    </>
  );
};
