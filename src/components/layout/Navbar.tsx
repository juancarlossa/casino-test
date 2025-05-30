"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { LucideIcon, MenuIcon } from "lucide-react";
import { items, menuItems } from "@/lib/links";

export interface MenuItem {
  id?: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  children?: MenuItem[];
}



export function Navbar ({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed px-5 z-50 self-end bg-transparent text-sm text-white", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Servicios">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/about ">Sobre Nosotros</HoveredLink>
        <HoveredLink href="/contacto ">Contacto</HoveredLink>
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

                {item.children?.map((child, index) => (
                  <div key={index} className="flex flex-col space-y-2">
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

                {item.children?.map((child, index) => (
                  <div key={index} className="flex flex-col space-y-2">
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