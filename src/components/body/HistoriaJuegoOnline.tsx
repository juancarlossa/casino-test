import React, { Fragment } from 'react';
import { Section } from '../layout/Section';

const sectionTitle = 'Historia y evolución del juego online';
const sectionDescription = 'La transformación del sector desde su legalización en España';

const introParagraph = `
  La historia del juego online en España ha experimentado una transformación radical desde su legalización.
  El verdadero punto de inflexión llegó en 2012, cuando España estableció uno de los 
  marcos legislativos más avanzados dentro de la Unión Europea para regular los juegos de azar en línea.
`;

const historyData = [
  {
    period: '2012-2015',
    advancement: 'Establecimiento del marco regulatorio básico',
  },
  {
    period: '2016-2020',
    advancement: 'Expansión de operadores y mejora de interfaces',
  },
  {
    period: '2021-2025',
    advancement: 'Integración de IA, realidad virtual y experiencias en vivo',
  },
];

const finalParagraph = `
  El año 2025 representa otro momento crucial en esta evolución, con avances tecnológicos que están
  redefiniendo las expectativas de los jugadores y elevando los estándares de calidad e inmersión.
`;

export function HistoriaJuegoOnline () {
  return (
    <Section
      title={sectionTitle}
      description={sectionDescription}
    >
      <p className="mb-6" id="historia">
        {introParagraph.split('marcos legislativos').map((part, idx, arr) => (
          idx === 0
            ? part
            : <Fragment key={idx}><strong>marcos legislativos{arr[1]}</strong></Fragment>
        ))}
      </p>

      <div
        id="metodospago"
        className="relative w-full overflow-hidden rounded-lg border border-indigo-700 shadow-lg shadow-indigo-900 transition duration-300 hover:scale-105 hover:shadow-indigo-300"
      >
        <table className="w-full rounded-lg text-left text-sm">
          <thead className="bg-indigo-800">
            <tr className="text-left">
              <th className="px-4 py-2 font-semibold">Periodo</th>
              <th className="px-4 py-2 font-semibold">Avances principales</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map(({ period, advancement }) => (
              <tr className="border-t transition-colors hover:bg-indigo-900" key={period}>
                <td className="px-4 py-4 text-sm font-bold">{period}</td>
                <td className="px-4 py-2 text-sm">{advancement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-5">
        {finalParagraph}
      </p>
    </Section>
  );
}


