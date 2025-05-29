"use client";

import React, { ReactNode } from "react"
import { motion } from "framer-motion"

type Props = {
  children: ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements // 'p', 'h1', 'h2', 'div', etc.
}

export function TextGenerate ({ children, as = "h1", className }: Props) {
  const Tag = as

  return React.createElement(
    Tag,
    {
      className:
        `${className}`,
    },
    `${children}`.split(" ").map((word, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          duration: 0.3,
          delay: index * 0.1,
          ease: "easeInOut",
        }}
        className="mr-2 inline-block"
      >
        {word}
      </motion.span>
    ))
  )
}