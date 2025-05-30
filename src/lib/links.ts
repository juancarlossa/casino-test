
import { Calendar, Home, Inbox, LucideIcon, Search, Settings } from "lucide-react"


export interface MenuItem {
  id?: string
  title: string;
  url: string;
  icon?: LucideIcon;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    id: "servicios",
    title: "Servicios",
    url: "/servicios", // Eliminado el trailing slash
  },
  {
    id: "productos",
    title: "Productos",
    url: "/productos", // Eliminado el trailing slash
  },
  {
    id: "contacto",
    title: "Contacto",
    url: "/contacto", // Eliminado el trailing slash
  },
]

export const items: MenuItem[] = [
  {
    title: "Top 5 Mejores Casinos Online en España",
    url: "/top-casinos",
    icon: Inbox,
    children: [{
      title: "Comparativa de Bonos de Bienvenida",
      url: "/comparativa-bonos",
      icon: Calendar,
    }],
  },
  {
    title: "Introducción a Casinos con Dinero Real",
    url: "/intro-casinos",
    icon: Search,
    children: [{
      title: "Historia y evolución del juego online",
      url: "/historia-juego-online",
      icon: Settings,
    },
    {
      title: "Marco legal en España para el juego online",
      url: "/marco-legal",
      icon: Home,
    }]
  },

  {
    title: "Ventajas de Jugar con Dinero Real",
    url: "/ventajas-jugar",
    icon: Inbox,
    children: [
      {
        title: "Comparativa: Online vs. Físico",
        url: "/comparativa-online-fisico",
        icon: Calendar,
      },
    ]
  },
  {
    title: "Cómo Elegir el Mejor Casino con Dinero Real",
    url: "/como-elegir-mejor-casino",
    icon: Search,
    children: [
      {
        title: "Señales de Alerta: Cuándo Evitar un Casino",
        url: "/senales-alerta",
        icon: Settings,
      },
    ]
  },
  {
    title: "Métodos de Pago y Seguridad en Casinos Online",
    url: "/medios-pago",
    icon: Home,
    children: [
      {
        title: "Protocolos de Seguridad y Cifrado",
        url: "/medios-pago#protocolos",
        icon: Inbox,
      },
      {
        title: "Comparativa de Medios de Pago",
        url: "/comparativa-pago",
        icon: Calendar,
      },
    ]
  },
  {
    title: "Experiencias y Preguntas Frecuentes",
    url: "/testimonios",
    icon: Search,
    children: [
      {
        title: "Preguntas Frecuentes",
        url: "/testimonios#preguntas",
        icon: Settings,
      },
    ]
  },
  {
    title: "Conclusiones y Recomendaciones",
    url: "/conclusiones",
    icon: Search,
    children: [
      {
        title: "Consejos Prácticos",
        url: "/consejos-practicos",
        icon: Settings,
      },
      {
        title: "Recomendaciones Finales",
        url: "/recomendaciones-finales",
        icon: Settings,
      },
    ]
  },
]