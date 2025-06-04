'use client'

import { useState } from "react";
import { CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { MagicCard } from "./magicui/magic-card";

export function ContactWrapper ({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <MagicCard className="bg-card-contacto duration-600 flex w-full gap-3 rounded-lg py-10 transition hover:scale-105 lg:px-10">
      <div className="size-full relative">
        <h3 className="text-md text-center font-bold lg:text-2xl">{title}</h3>
        <span className="mx-auto mt-3 block h-1 w-24 rounded bg-yellow-400" />
      </div>
      <CardContent className="w-full space-y-4">
        {children}
      </CardContent>
    </MagicCard>
  )
}
export function ContactForm () {
  const [accepted, setAccepted] = useState(false);
  return (
    <ContactWrapper title="Envíanos un mensaje">
      <form
        className="space-y-4"
        action="https://formsubmit.co/f1ffd46b81e0cf30c8cffcc6794adbf1"
        method="POST"
        onSubmit={(e) => {
          if (!accepted) {
            e.preventDefault();
            alert("Debes aceptar la política de privacidad para continuar.");
          }
        }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input placeholder="Nombre" name="nombre" />
          <Input placeholder="Apellidos" name="apellidos" />
        </div>
        <Input type="email" placeholder="Correo Electrónico" name="email" />
        <Input placeholder="Asunto" name="asunto" />
        <Input placeholder="Mensaje" name="mensaje" />

        <div className="flex items-center space-x-2">
          <Checkbox
            id="privacy"
            name="privacy"
            required
            onCheckedChange={(val) => setAccepted(val === true)}
          />
          <label htmlFor="privacy" className="text-sm">
            He leído y acepto la política de privacidad y el tratamiento de mis datos personales.
          </label>
        </div>
        <Button type="submit">Enviar Mensaje</Button>
      </form>
    </ContactWrapper>

  );
}