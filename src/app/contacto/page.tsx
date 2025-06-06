"use client"

import { Book, LocationEdit, Mail, Phone } from "lucide-react";
import { IconExclamationCircle } from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ContactForm, ContactWrapper } from "@/components/contact-form";
import { ParticlesFull } from "@/components/juankui/particles";


// Componente para icono con fondo redondeado
function SvgContainer ({ Icon }: { Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-600 p-2">
      <Icon className="size-5 stroke-white" aria-hidden="true" />
    </span>
  );
}

// Sección de Información de Contacto
function ContactInfo () {
  return (
    <ContactWrapper
      title="Información de Contacto"
    >
      <article className="flex flex-col items-start justify-start space-y-5 p-5 text-sm lg:grid lg:grid-cols-2 lg:text-xs">
        <div className="flex items-start justify-start space-x-3">
          <SvgContainer Icon={Mail} />
          <div className="flex flex-col">
            <p><strong>Correo Electrónico</strong></p>
            <p>
              Consultas generales:{" "}
            </p>
            <a href="mailto:info@anced.es" className="pb-1 pl-1 text-sm font-bold text-yellow-400 lg:text-xs">info@anced.es</a>
            <p>
              Colaboraciones:{" "}
            </p>
            <a href="mailto:colaboraciones@anced.es" className="pb-1 pl-1 text-sm font-bold text-yellow-400 lg:text-xs">colaboraciones@anced.es</a>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <SvgContainer Icon={Phone} />
          <div>
            <p><strong>Teléfono</strong></p>
            <p>Atención al cliente: </p>
            <p className="pb-1 pl-1 text-sm font-bold text-yellow-400 lg:text-xs">+34 915 553 170</p>
            <p>Horario: Lunes a Viernes: </p>
            <p className="pb-1 pl-1 text-sm font-bold text-yellow-400 lg:text-xs">9:00 - 18:00</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <SvgContainer Icon={LocationEdit} />
          <div>
            <p><strong>Ubicación</strong></p>
            <p>Diego de León,</p>
            <p>50 28006 Madrid,</p>
            <p>España</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <SvgContainer Icon={Book} />
          <div>
            <p><strong>Horario de Atención</strong></p>
            <p>Lunes a Viernes: </p>
            <p className="pb-1 pl-1 text-sm font-bold text-yellow-400 lg:text-xs">9:00 - 18:00</p>
            <p>Sábados: </p>
            <p className="pb-1 pl-1 text-sm font-bold text-yellow-400 lg:text-xs">10:00 - 14:00</p>
          </div>
        </div>
      </article>

      <div className="bg-card-contacto flex items-center space-x-3 rounded p-5">
        <IconExclamationCircle className="stroke-yellow-400" />
        <div>
          <p className="font-medium">
            Nos comprometemos a responder todas las consultas en un plazo máximo de 24 horas laborables. Soporte prioritario para usuarios registrados.
          </p>
        </div>
      </div>
    </ContactWrapper>
  );
}

// Sección Ubicación
function LocationInfo () {
  return (
    <ContactWrapper
      title="Ubicación"
    >
      <p>Visítanos en nuestras oficinas centrales en Madrid.</p>
      <p>Oficinas Centrales de Anced: Diego de León, 50 28006 Madrid, España</p>

      <div className="flex max-w-[500px] flex-row justify-between">
        <div>
          <p><strong>Transporte Público:</strong></p>
          <ul className="text-muted-foreground">
            <li>Metro: Gran Vía (L1, L5)</li>
            <li>Bus: Líneas 1, 2, 46, 74</li>
          </ul>

        </div>
        <div>
          <p><strong>Parking Cercano:</strong></p>
          <ul className="text-muted-foreground">
            <li>Parking Gran Vía</li>
            <li>Parking Plaza España</li>
          </ul>
        </div>
      </div>

      <p><strong>Horario de Visitas:</strong> Lunes a Viernes: 10:00 - 17:00 (Cita previa requerida)</p>
    </ContactWrapper>
  );
}

// Datos de FAQ como constante para mantener limpio
const faqData = [
  {
    question: "¿Cómo puedo colaborar con Anced?",
    answer:
      "Si eres un experto en el sector de juegos de azar o representas a un casino online, puedes contactarnos a través de nuestro correo de colaboraciones. Valoramos las asociaciones que puedan aportar valor a nuestros usuarios.",
  },
  {
    question: "¿Cuánto tardan en responder a mis consultas?",
    answer:
      "Nos comprometemos a responder todas las consultas en un plazo máximo de 24 horas laborables. Para consultas más urgentes, recomendamos utilizar nuestro número de teléfono durante el horario de atención.",
  },
  {
    question: "¿Ofrecen asesoramiento personalizado?",
    answer:
      "Sí, ofrecemos asesoramiento personalizado para usuarios que buscan recomendaciones específicas según sus preferencias de juego. Puedes solicitar este servicio a través de nuestro formulario de contacto.",
  },
  {
    question: "¿Cómo puedo reportar un problema con un casino?",
    answer:
      "Si has tenido algún problema con un casino que recomendamos, por favor contáctanos detallando tu experiencia. Tomamos muy en serio estos reportes y los investigamos a fondo para mantener la calidad de nuestras recomendaciones.",
  },
];

function AccordionFAQ () {
  return (
    <ContactWrapper title="Preguntas Frecuentes">
      <Accordion
        type="single"
        collapsible
        className="mb-0 flex w-full flex-1 flex-col"
        defaultValue="item-0"
      >

        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="w-full">
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ContactWrapper>
  );
}


// Página principal Contacto
export default function ContactoPage () {

  return (
    <div className="w-full bg-gradient-to-r from-indigo-700 to-indigo-950 pt-20">

      <div className="mx-auto flex w-[80vw] flex-col space-y-5">
        <div className="flex flex-col space-y-3">
          <h1 className="text-md text-center font-bold lg:text-4xl">Contacto</h1>
          <p className="pb-10 text-center">Estamos aquí para ayudarte. No dudes en contactarnos si tienes alguna pregunta o sugerencia.</p>
        </div>
        <ParticlesFull />
        <section className="mb-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />

          <LocationInfo />
          <AccordionFAQ />
        </section>
      </div>
    </div>
  );
}
