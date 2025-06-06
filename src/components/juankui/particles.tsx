'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "../magicui/particles";

export function ParticlesFull ({ color: _color }: { color?: string }) {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#53eafd");

  /*
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#ffffff");
  }, [resolvedTheme]);
*/
  return (
    <Particles
      className="absolute inset-0 z-0"
      quantity={100}
      ease={80}
      color={_color || color}
      refresh
    />
  )
}