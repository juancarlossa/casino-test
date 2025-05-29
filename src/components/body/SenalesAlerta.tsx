import React from 'react';
import { Section } from '../layout/Section';

export function SenalesAlerta () {
  const warnings = [
    {
      title: 'Sin licencia DGOJ visible',
      description: 'Los casinos legítimos siempre muestran claramente su número de licencia oficial.',
    },
    {
      title: 'Términos y condiciones confusos',
      description: 'La falta de transparencia en las reglas de bonos y retiros es una señal de alarma.',
    },
    {
      title: 'Métodos de pago limitados',
      description: 'Los buenos casinos ofrecen múltiples opciones seguras para depósitos y retiros.',
    },
    {
      title: 'Atención al cliente deficiente',
      description: 'La imposibilidad de contactar fácilmente con soporte en español es preocupante.',
    },
    {
      title: 'Reseñas negativas consistentes',
      description: 'Múltiples quejas sobre pagos retrasados o denegados indican problemas serios.',
    },
    {
      title: 'Aceptación de criptomonedas',
      description: 'En España, los casinos legales no pueden aceptar criptomonedas como método de pago.',
    },
  ];

  return (
    <Section
      title='Señales de Alerta: Cuándo Evitar un Casino'
      description=''
    >


      <div id='senales' className="flex flex-col gap-x-8 gap-y-4">
        {warnings.map((item, index) => (
          <div key={index} className="flex flex-row items-start space-x-3">
            <div className="mt-1 flex items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
              <span className='flex h-[20px] w-[20px] items-center justify-center'>{index + 1}</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-indigo-100">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
