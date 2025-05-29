export function Footer () {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-transparent to-indigo-900 px-5 py-10 text-slate-200">
      <div className="grid w-full lg:space-y-0 space-y-5 grid-cols-1 lg:grid-cols-3 gap-x-10 rounded-lg border-2 border-indigo-500 p-5 lg:w-[60vw] hover:bg-indigo-900 transition-colors">
        <div className="space-y-3 text-indigo-200">
          <h4>Anced</h4>
          <p>Comparamos los mejores casinos online con dinero real. Encuentra bonos, juegos y toda la información que necesitas para jugar de forma segura.</p>
        </div>

        <div className="space-y-3 text-indigo-200">
          <h4>Sobre Nosotros</h4>
          <p>Somos un equipo de expertos en juegos de azar online dedicados a proporcionar información imparcial y actualizada sobre los mejores casinos en España.</p>
          <p>Nuestro objetivo es ayudarte a encontrar experiencias de juego seguras y entretenidas, siempre promoviendo el juego responsable.</p>
        </div>

        <div className="space-y-3 text-indigo-200">
          <h4>Contacto</h4>
          <p>¿Tienes preguntas o sugerencias? Contáctanos:</p>
        </div>
      </div>

    </footer>
  )
}