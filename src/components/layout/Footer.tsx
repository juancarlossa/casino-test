export function Footer () {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-transparent to-indigo-900 px-5 py-10 text-slate-200">
      <div className="grid w-full grid-cols-1 gap-x-10 space-y-5 rounded-lg border-2 border-indigo-500 p-5 transition duration-300 hover:bg-indigo-900 hover:shadow-lg hover:shadow-indigo-500 lg:w-[60vw] lg:grid-cols-3 lg:space-y-0">
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