import React from 'react';
import { Clock, Gift, Gamepad2, CheckCircle } from 'lucide-react';
import { Section } from '../layout/Section';
import { MagicCard } from '../magicui/magic-card';
import { Card, CardContent } from '../ui/card';

const FeatureBox = ({
  icon,
  title,
  description,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}) => (
  <Card className="w-full border-none p-0 shadow-none flex">
    <MagicCard className="size-full flex flex-col items-center justify-center rounded-lg border p-6 shadow-md">
      <CardContent className="size-full flex flex-col items-start justify-start space-y-3 p-4">
        <div className="flex w-full items-center gap-3">
          <div className="rounded-full bg-indigo-100 p-2 text-indigo-700">{icon}</div>
          <h3 className="text-md font-bold text-indigo-200">{title}</h3>
        </div>
        <p className='text-sm'>{description}</p>
        <ul className="space-y-1 text-green-500">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs">
              <CheckCircle className="h-4 w-4" />
              {item}
            </li>
          ))}
        </ul>

      </CardContent>

    </MagicCard>
  </Card>
);

export function VentajasJugar () {
  return (
    <Section
      title='Ventajas de Jugar con Dinero Real'
      description='Los casinos online ofrecen numerosas ventajas frente a los establecimientos físicos tradicionales.'
    >

      <div id='ventajas' className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <FeatureBox
          icon={<Clock className="h-6 w-6" />}
          title="Disponibilidad 24/7"
          description="Juega en cualquier momento y lugar, sin restricciones de horarios ni desplazamientos."
          items={[
            "Acceso permanente sin horarios",
            "Sin desplazamientos necesarios",
            "Disponible en todos los dispositivos",
            "Sin limitaciones geográficas",
          ]}
        />
        <FeatureBox
          icon={<Gift className="h-6 w-6" />}
          title="Bonos Exclusivos"
          description="Aprovecha promociones y bonificaciones que multiplican tu presupuesto inicial."
          items={[
            "Bonos de bienvenida generosos",
            "Giros gratis en tragaperras",
            "Promociones recurrentes",
            "Programas de fidelidad VIP",
          ]}
        />
        <FeatureBox
          icon={<Gamepad2 className="h-6 w-6" />}
          title="Mayor Variedad de Juegos"
          description="Disfruta de miles de opciones imposibles de encontrar en casinos físicos."
          items={[
            "Miles de tragaperras temáticas",
            "Múltiples variantes de juegos clásicos",
            "Juegos exclusivos del entorno digital",
            "Jackpots progresivos millonarios",
          ]}
        />
      </div>
    </Section>
  );
};