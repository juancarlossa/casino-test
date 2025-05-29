import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, LucideIcon } from 'lucide-react';
import { Section } from '../layout/Section';

// ✅ Datos refactorizados
const markers = [
  {
    title: 'Indicadores de un casino legal',
    icon: CheckCircle,
    color: 'green',
    items: [
      'Dominio .es alojado en España',
      'Sellos de confianza (Juego Seguro, +18, Jugar Bien)',
      'Registro verificable en la DGOJ',
      'Enlaces a la página web oficial de la DGOJ',
    ],
  },
  {
    title: 'Señales de un casino ilegal',
    icon: XCircle,
    color: 'red',
    items: [
      'Ausencia de licencia DGOJ verificable',
      'Dominio no alojado en España (.com, .net, etc.)',
      'Falta de sellos oficiales de juego responsable',
      'Aceptación de criptomonedas como método de pago',
    ],
  },
];

// ✅ Componente reutilizable
type CardProps = {
  title: string;
  icon: LucideIcon;
  color: string;
  items: string[];
};

function InfoCard ({ title, icon: Icon, color, items }: CardProps) {
  const baseColor = {
    green: {
      border: 'border-green-300',
      bg: 'bg-green-50 dark:bg-green-800/70 hover:dark:bg-green-800',
      text: 'text-green-700 dark:text-green-100 hover:dark:text-white group-hover:text-white dark:group-hover:text-white/90',
      itemText: 'text-green-800 dark:text-green-200',
    },
    red: {
      border: 'border-red-200 dark:border-red-500/40',
      bg: 'bg-red-50 dark:bg-red-800/50 hover:dark:bg-red-900',
      text: 'text-red-700 dark:text-red-100 group-hover:text-white dark:group-hover:text-white/90',
      itemText: 'text-red-800 dark:text-red-200',
    },
  }[color];

  return (
    <div className={`group rounded-md border ${baseColor?.border} p-4 transition-def ${baseColor?.bg}`}>
      <h3 className={`mb-3 flex items-center gap-2 font-semibold transition-colors ${baseColor?.text}`}>
        <Icon className="h-5 w-5" />
        {title}
      </h3>
      <ul className={`space-y-2 ${baseColor?.itemText}`}>
        {items.map((item, i) => (
          <li key={i} className={`flex items-center gap-2 hover:text-white transition-colors duration-300`}>
            <Icon className="h-4 w-4" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MarcoLegal () {
  return (
    <Section
      title="Marco legal en España para el juego online"
      description="Regulación y requisitos para operar legalmente en el mercado español"
    >
      <p id='marco'>
        El juego online en España opera bajo un estricto marco legal regulado por la <strong>Ley 13/2011, de 27 de mayo</strong>. La entidad
        responsable de supervisar todas las actividades relacionadas con el juego online es la{' '}
        <strong>Dirección General de Ordenación del Juego (DGOJ)</strong>, organismo público que determina qué operadores son legales y otorga las
        licencias necesarias.
      </p>

      {/* Tarjetas */}
      <div className="grid w-full gap-6 md:grid-cols-2">
        {markers.map((props, i) => (
          <InfoCard key={i} {...props} />
        ))}
      </div>

      {/* Aviso legal */}
      <div className="mt-6 rounded-md border-l-4 border-yellow-400 bg-amber-100 p-4">
        <p className="flex items-start gap-2 text-yellow-800">
          <AlertTriangle className="mt-0.5 h-5 w-5" />
          <span>
            <strong>Importante:</strong> Cualquier casino que acepte criptomonedas como método de pago no se considera legal en territorio español,
            según la normativa vigente. Jugar en casinos sin licencia DGOJ no solo es ilegal, sino que también deja al jugador sin protección legal
            en caso de disputas.
          </span>
        </p>
      </div>
    </Section>
  );
}
