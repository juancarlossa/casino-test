'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

type FormData = {
  name: string;
  description?: string;
  imageUrl?: string;
  rating?: number;
  bonus?: string;
  url?: string;
  giros?: string;
  requisitos?: string;
  tiempo?: string;
};

const fields: {
  name: keyof FormData;
  placeholder: string;
  type?: string;
  options?: object;
}[] = [
    { name: 'name', placeholder: 'Nombre', options: { required: 'El nombre es obligatorio' } },
    { name: 'description', placeholder: 'Descripción' },
    { name: 'imageUrl', placeholder: 'URL de imagen' },
    {
      name: 'rating',
      placeholder: 'Rating (0.0 - 5.0)',
      type: 'number',
      options: {
        valueAsNumber: true,
        min: { value: 0, message: 'Mínimo 0' },
        max: { value: 5, message: 'Máximo 5' },
      },
    },
    { name: 'bonus', placeholder: 'Bono' },
    { name: 'url', placeholder: 'URL del casino' },
    { name: 'giros', placeholder: 'Giros gratis' },
    { name: 'requisitos', placeholder: 'Requisitos' },
    { name: 'tiempo', placeholder: 'Tiempo de validez' },
  ];

export default function CreateCasino () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  async function onSubmit (data: FormData) {
    const res = await fetch('/api/casinos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success('Casino creado exitosamente');
      reset();
    } else {
      toast.error('Error al crear el casino');
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card-contacto w-md flex flex-col gap-4 rounded-lg p-4 shadow-md"
    >
      <h2 className='text-center text-lg'>Crea un casino</h2>
      {fields.map(({ name, placeholder, type = 'text', options }) => (
        <div key={name}>
          <Input
            type={type}
            placeholder={placeholder}
            {...register(name, options)}
          />
          {errors[name] && (
            <p className="text-sm text-red-500">
              {('message' in (errors[name] ?? {}) ? (errors[name] as import('react-hook-form').FieldError).message : undefined)}
            </p>
          )}
        </div>
      ))}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creando...' : 'Crear Casino'}
      </Button>
    </form>
  );
}
