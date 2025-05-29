
export const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1, // cada hijo aparece con 1s de diferencia
      delayChildren: 1.5,   // espera 1.5s antes de empezar
    },
  },
}

export const item = {
  hidden: { opacity: 0, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2, // 👈 hace que cada item tarde 1.2s en animarse
      ease: "easeOut", // opcional: curva suave
    },
  },
}