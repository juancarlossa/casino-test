'use client'
/* eslint-disable @next/next/no-img-element */

import 'atropos/css'
import Atropos from 'atropos/react'

export function CardAtropos () {
  return (
    <div className="size-full mx-auto max-w-md">
      <Atropos
        className="size-full relative overflow-hidden rounded-xl"
        activeOffset={40}
        shadowScale={1.05}
      >
        {/* Fondo, se mueve al revés */}

        <div className='absolute inset-0 bg-red-900' />
        <img
          src="/casinos-1.webp"
          alt="Fondo de casino"
          data-atropos-offset="-5"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-70 hover:opacity-100"
        />



        {/*         <img
          src="/fichas.png"
          alt="Fondo de casino"
          data-atropos-offset="10"
          className="left-30 top-30 relative h-40 w-full object-contain"
        /> */}
        <img
          src="/casumo.png"
          alt="Casumo"
          data-atropos-offset="20"
          className="h-26 absolute top-0 mx-auto w-full object-contain"
        />

        {/* Elemento central */}
        <img
          src="/dado-1.png"
          alt="Dados"
          data-atropos-offset="15"
          className="h-26 top-30 absolute mx-auto w-full object-contain"
        />

        <img
          src="/dado-2.png"
          alt="Dados"
          data-atropos-offset="10"
          className="h-26 absolute top-20 mx-auto w-full object-contain"
        />

        <div className="absolute bottom-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
          <h4 data-atropos-offset="5" className="text-lg font-semibold">Experiencia Inmersiva</h4>
          <p
            data-atropos-offset="5"
            className="text-sm font-medium leading-snug drop-shadow-2xl"
          >
            Los casinos online modernos ofrecen gráficos de alta calidad y experiencias interactivas que rivalizan con los establecimientos físicos.
          </p>
        </div>
      </Atropos>
    </div>
  )
}