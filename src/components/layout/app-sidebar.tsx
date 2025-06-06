'use client'
import { Home } from "lucide-react"
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
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { items, MenuItem } from "@/lib/links";
import { Link } from 'next-view-transitions';

function RenderMenuItems ({ items }: { items: MenuItem[] }) {
  return (
    <>
      {items.map((item) => {
        if (item.children && item.children.length > 0) {
          // Renderiza el item con submenu
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <span className="text-xs">{item.title}</span>
                </Link>
              </SidebarMenuButton>

              <SidebarMenuSub>
                {item.children.map((child) => (
                  <SidebarMenuSubItem key={child.title}>
                    <SidebarMenuSubButton asChild>
                      <Link href={child.url}>
                        {child.icon && <child.icon />}
                        <span className="text-xs">{child.title}</span>
                      </Link>
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

    <Sidebar collapsible="icon" className="flex h-full flex-col">
      {!open && (
        <SidebarTrigger className="mt-5" />
      )}
      <SidebarContent >
        <SidebarGroup>
          <div className="flex flex-row items-stretch justify-between py-3">
            <SidebarGroupLabel className="truncate">Casino Anced</SidebarGroupLabel>
            {/*open && (
                <SidebarTrigger />
              )*/}
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem >
                <SidebarMenuButton asChild>
                  <Link href="/#home" className="bg-card-contacto">
                    <Home />
                    <span className="truncate text-xs">Home</span>
                  </Link>
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
