"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { Calendar, Home, Inbox, LucideIcon, MenuIcon, Search, Settings } from "lucide-react";

export interface MenuItem {
  id?: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  children?: MenuItem[];
}

// Menu items.
const items: MenuItem[] = [
  {
    title: "Top 5 Mejores Casinos Online en España",
    url: "#top",
    icon: Inbox,
    children: [{
      title: "Comparativa de Bonos de Bienvenida",
      url: "#comparativa-bonos",
      icon: Calendar,
    }],
  },
  {
    title: "Introducción a Casinos con Dinero Real",
    url: "#intro",
    icon: Search,
    children: [{
      title: "Historia y evolución del juego online",
      url: "#historia",
      icon: Settings,
    },
    {
      title: "Marco legal en España para el juego online",
      url: "#marco",
      icon: Home,
    }]
  },

  {
    title: "Ventajas de Jugar con Dinero Real",
    url: "#ventajas",
    icon: Inbox,
    children: [
      {
        title: "Comparativa: Online vs. Físico",
        url: "#online-fisico",
        icon: Calendar,
      },
    ]
  },
  {
    title: "Cómo Elegir el Mejor Casino con Dinero Real",
    url: "#comoelegir",
    icon: Search,
    children: [
      {
        title: "Señales de Alerta: Cuándo Evitar un Casino",
        url: "#senales",
        icon: Settings,
      },
    ]
  },
  {
    title: "Métodos de Pago y Seguridad en Casinos Online",
    url: "#metodospago",
    icon: Home,
    children: [
      {
        title: "Protocolos de Seguridad y Cifrado",
        url: "#protocolos",
        icon: Inbox,
      },
      {
        title: "Comparativa de Medios de Pago",
        url: "#mediospago",
        icon: Calendar,
      },
    ]
  },
  {
    title: "Experiencias y Preguntas Frecuentes",
    url: "#experiencias",
    icon: Search,
    children: [
      {
        title: "Preguntas Frecuentes",
        url: "#preguntas",
        icon: Settings,
      },
    ]
  },
  {
    title: "Conclusiones y Recomendaciones",
    url: "#conclusiones",
    icon: Search,
    children: [
      {
        title: "Consejos Prácticos",
        url: "#consejos-practicos",
        icon: Settings,
      },
      {
        title: "Recomendaciones Finales",
        url: "#recomendaciones-finales",
        icon: Settings,
      },
    ]
  },
]

const menuItems: MenuItem[] = [
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
export function Navbar ({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed px-5 z-50 self-end", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">

        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>

      {/* VERSION MOVIL */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" size="icon" className="bg-dorado lg:hidden">
            <MenuIcon className="customsvg h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="overflow-y-auto">
          <SheetTitle>Casino</SheetTitle>
          <div className="grid gap-6 p-6">

            {menuItems.map((item, index) =>
              <React.Fragment key={index}>
                <Link
                  href={item.url}
                  className="text-sm font-bold"
                >
                  {item.title}
                </Link>

                {item.children?.map((child) => (
                  <div key={child.id} className="flex flex-col space-y-2">
                    <HoveredLink href={child.url}>
                      • {child.title}
                    </HoveredLink>
                  </div>
                ))}

              </React.Fragment>
            )}
            <div className="border bg-yellow-400" />
            {items.map((item, index) =>
              <React.Fragment key={index}>
                <Link
                  href={item.url}
                  className="text-sm font-bold"
                >
                  {item.title}
                </Link>

                {item.children?.map((child) => (
                  <div key={child.id} className="flex flex-col space-y-2">
                    <HoveredLink href={child.url}>
                      • {child.title}
                    </HoveredLink>
                  </div>
                ))}

              </React.Fragment>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}