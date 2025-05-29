'use client'
import { Calendar, Home, Inbox, LucideIcon, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

export interface MenuItem {
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

function RenderMenuItems ({ items }: { items: MenuItem[] }) {
  return (
    <>
      {items.map((item) => {
        if (item.children && item.children.length > 0) {
          // Renderiza el item con submenu
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <span className="text-xs">{item.title}</span>
                </a>
              </SidebarMenuButton>

              <SidebarMenuSub>
                {item.children.map((child) => (
                  <SidebarMenuSubItem key={child.title}>
                    <SidebarMenuSubButton asChild>
                      <a href={child.url}>
                        {child.icon && <child.icon />}
                        <span className="text-xs">{child.title}</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>
          );
        }

        // Renderiza item simple
        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                {item.icon && <item.icon />}
                <span className="text-xs">{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </>
  );
}

export function AppSidebar () {
  const { open } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      {!open && (
        <SidebarTrigger className="mx-auto mt-5" />
      )}

      <SidebarContent>
        <SidebarGroup>
          <div className="flex flex-row items-stretch justify-between py-3">
            <SidebarGroupLabel>Casino Anced</SidebarGroupLabel>
            {open && (
              <SidebarTrigger />
            )}
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem >
                <SidebarMenuButton asChild>
                  <a href="#home">
                    <Home />
                    <span className="text-xs">Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <RenderMenuItems items={items} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
