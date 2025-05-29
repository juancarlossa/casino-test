import React from 'react';
import { Section } from '../layout/Section';

export function HistoriaJuegoOnline () {
  return (
    <Section
      title='Historia y evolución del juego online'
      description='La transformación del sector desde su legalización en España'
    >
      <p className="mb-6" id='historia'>
        La historia del juego online en España ha experimentado una transformación radical desde su legalización.
        El verdadero punto de inflexión llegó en 2012, cuando España estableció uno de los <strong>marcos legislativos más avanzados dentro de la Unión Europea</strong> para regular los juegos de azar en línea.
      </p>
      <table className="w-full table-auto border-collapse border border-indigo-800 shadow-md shadow-indigo-800">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2 font-semibold">Periodo</th>
            <th className="px-4 py-2 font-semibold">Avances principales</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-2 font-bold text-sm">2012-2015</td>
            <td className="px-4 py-2  text-sm">Establecimiento del marco regulatorio básico</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 font-bold  text-sm">2016-2020</td>
            <td className="px-4 py-2  text-sm">Expansión de operadores y mejora de interfaces</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 font-bold  text-sm">2021-2025</td>
            <td className="px-4 py-2 text-sm">Integración de IA, realidad virtual y experiencias en vivo</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-6">
        El año 2025 representa otro momento crucial en esta evolución, con avances tecnológicos que están
        redefiniendo las expectativas de los jugadores y elevando los estándares de calidad e inmersión.
      </p>
    </Section>
  );
};


