'use client'

import { Section } from "../layout/Section";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "“La experiencia de gamificación de Casumo me enganchó desde el primer día. No es solo jugar, sino completar misiones y desbloquear recompensas. El soporte al cliente es excepcional, cualquier duda se resuelve en minutos.”",
    name: "Laura, 29 años",
    designation: "Product Manager en TechFlow, Barcelona",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },
  {
    quote:
      "“Como aficionado tanto al casino como a las apuestas deportivas, Sportium me permite disfrutar de ambos mundos sin tener que cambiar de plataforma. Poder ver el partido mientras juego a la ruleta es una experiencia única.”",
    name: "Carlos, 41 años",
    designation: "CTO en InnovateSphere, Valencia",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "“Casino777 tiene la mejor selección de ruletas que he encontrado. Como jugador tradicional, valoro la variedad de opciones y los límites flexibles que se adaptan a diferentes presupuestos.”",
    name: "Ana, 38 años",
    designation: "Operations Director en CloudScale, Sevilla",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Testimonios () {
  return (
    <Section
      title="Experiencias y Preguntas Frecuentes"
      description="Conoce las opiniones de jugadores reales y encuentra respuestas a las dudas más comunes."
    >

      <AnimatedTestimonials testimonials={testimonials} />
    </Section>
  );
};
