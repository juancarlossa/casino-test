'use client';

import { useEffect, useState } from 'react';
import { Span } from '../span';
import EditCasinoForm from './casino-form';

type Casino = {
  id: number;
  name: string;
  imageUrl?: string;
  description?: string;
  rating?: number;
  bonus?: string;
  url?: string;
  giros?: string;
  requisitos?: string;
  tiempo?: string;
  createdAt: string;
};

export function CasinosList () {
  const [casinos, setCasinos] = useState<Casino[]>([]);

  useEffect(() => {
    fetch('/api/casinos')
      .then(res => res.json())
      .then(data => setCasinos(data));
  }, []);

  return (
    <ul className='flex space-x-5'>
      {casinos.map(casino => (
        <li key={casino.id} className='bg-card-contacto w-md flex flex-col gap-4 rounded-lg p-4 shadow-md'>
          <h2>Nombre: {casino.name}</h2>
          <p>Descripcion: {casino.description}</p>
          <p>Rating: {casino.rating ?? 'N/A'}</p>
          <EditCasinoForm id={casino.id} />
        </li>
      ))}
    </ul>

  );
}
