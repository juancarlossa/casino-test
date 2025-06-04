"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../../ui/navbar-menu";


export function NavItems () {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Menu setActive={setActive}>
      <HoveredLink href="/">Home</HoveredLink>
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
  )
}