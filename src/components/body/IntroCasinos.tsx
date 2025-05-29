
import { Section } from "../layout/Section"
import { CardAtropos } from "../juankui/card-atropos"

export function IntroCasinos () {
  return (
    <Section
      title="Introducción a Casinos con Dinero Real"
      gradientBackground="bg-gradient-top"
    >

      <div className="grid items-center gap-8 md:grid-cols-2" id="intro">
        {/* Texto izquierdo */}
        <div>
          <h3 className="mb-4 text-xl font-bold">
            Qué son los casinos con dinero real
          </h3>
          <p className="text-muted-foreground mb-4">
            Los casinos con dinero real son plataformas digitales que permiten a los usuarios apostar y jugar con dinero auténtico desde cualquier lugar con conexión a internet. A diferencia de las versiones gratuitas, estos establecimientos ofrecen:
          </p>

          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-start gap-2">
              <span className="rounded-full px-2 py-0.5 text-xs font-bold text-indigo-200 dark:bg-yellow-600">1</span>
              Posibilidad de realizar depósitos mediante diversos métodos de pago
            </li>
            <li className="flex items-start gap-2">
              <span className="rounded-full px-2 py-0.5 text-xs font-bold text-indigo-200 dark:bg-yellow-600">2</span>
              Oportunidad de retirar ganancias reales
            </li>
            <li className="flex items-start gap-2">
              <span className="rounded-full px-2 py-0.5 text-xs font-bold text-indigo-200 dark:bg-yellow-600">3</span>
              Experiencia similar o superior a los casinos físicos tradicionales
            </li>
            <li className="flex items-start gap-2">
              <span className="rounded-full px-2 py-0.5 text-xs font-bold text-indigo-200 dark:bg-yellow-600">4</span>
              Accesibilidad 24/7 desde computadoras y dispositivos móviles
            </li>
          </ul>

          <p className="text-muted-foreground mt-4 text-sm">
            Estos espacios digitales replican y a menudo amplían la experiencia de los casinos físicos, ofreciendo juegos clásicos como tragamonedas, ruleta, blackjack y muchos otros a través de interfaces digitales modernas y atractivas.
          </p>
        </div>

        {/* <Image
              fill
              src="/casinos-1.webp" // Reemplaza por tu ruta real
              alt="Experiencia inmersiva"
              className="h-full w-full object-cover opacity-20 transition-opacity duration-500 hover:opacity-100"
            /> */}


        <CardAtropos />


      </div>
    </Section>
  )
}
