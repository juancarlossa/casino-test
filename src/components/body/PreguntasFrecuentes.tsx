import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Section } from "../layout/Section";
import { NeonGradientCard } from "../magicui/neon-gradient-card";

const preguntas = [
  {
    pregunta: "¿Son legales los casinos online en España?",
    respuesta:
      "Sí, los casinos online son legales en España siempre que cuenten con una licencia emitida por la Dirección General de Ordenación del Juego (DGOJ)."
  },
  {
    pregunta: "¿Cuál es el mejor casino online?",
    respuesta:
      "Depende de tus preferencias personales. Algunos casinos destacan por sus bonos, otros por su catálogo de juegos o su atención al cliente."
  },
  {
    pregunta: "¿Cómo funcionan los bonos de bienvenida?",
    respuesta:
      "Los bonos de bienvenida suelen otorgarse al registrarse e incluir depósitos duplicados, giros gratis u otras promociones. Lee siempre los términos y condiciones."
  },
  {
    pregunta: "¿Es seguro depositar dinero en casinos online?",
    respuesta:
      "Sí, siempre que el casino esté regulado y utilice tecnologías de cifrado para proteger las transacciones."
  },
  {
    pregunta: "¿Cuánto tarda un retiro de ganancias?",
    respuesta:
      "Depende del método de pago utilizado. Algunos retiros pueden ser instantáneos, mientras que otros tardan entre 1 y 5 días hábiles."
  },
  {
    pregunta: "¿Puedo jugar desde el móvil?",
    respuesta:
      "Sí, la mayoría de los casinos online están optimizados para dispositivos móviles o tienen aplicaciones dedicadas."
  },
  {
    pregunta: "¿Qué juegos ofrecen mejores probabilidades?",
    respuesta:
      "Juegos como el blackjack y algunas versiones de la ruleta europea tienen un bajo margen de la casa y por tanto mejores probabilidades para el jugador."
  }
];

export function PreguntasFrecuentes () {
  return (
    <Section
      title="Preguntas Frecuentes"
      description="Resolvemos las dudas más comunes sobre casinos online con dinero real"
    >
      <NeonGradientCard className=" p-0 m-0 w-full relative items-center justify-center text-center">
        <Accordion id="preguntas" type="single" collapsible className="w-full rounded-lg border shadow-xl">
          {preguntas.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="px-5">
              <AccordionTrigger className="font-bold">{item.pregunta}</AccordionTrigger>
              <AccordionContent>{item.respuesta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </NeonGradientCard>
    </Section>
  );
};
