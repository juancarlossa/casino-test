'use client';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type CasinoForm = {
  name: string;
  imageUrl?: string;
  description?: string;
  rating?: number;
  bonus?: string;
  url?: string;
  giros?: string;
  requisitos?: string;
  tiempo?: string;
};

export default function EditCasinoForm ({ id }: { id: number }) {
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CasinoForm>();

  // Obtener datos actuales del casino
  useEffect(() => {
    async function fetchCasino () {
      const res = await fetch(`/api/casinos/${id}`);
      if (res.ok) {
        const data = await res.json();
        reset(data);
      } else {
        alert('Error al cargar el casino');
      }
      setLoading(false);
    }
    fetchCasino();
  }, [id, reset]);

  // Enviar actualización
  const onSubmit = async (data: CasinoForm) => {
    const res = await fetch(`/api/casinos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert('Casino actualizado');
    } else {
      alert('Error actualizando casino');
    }
  };

  // Eliminar casino
  const handleDelete = async () => {
    if (!confirm('¿Estás seguro de que deseas eliminar este casino?')) return;

    const res = await fetch(`/api/casinos/${id}`, { method: 'DELETE' });

    if (res.ok) {
      alert('Casino eliminado');
      // Puedes redirigir o refrescar después
    } else {
      alert('Error eliminando casino');
    }
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card-contacto flex flex-col gap-4 rounded-lg p-4 shadow-md"
    >
      <Input
        placeholder="Nombre"
        {...register('name', { required: 'El nombre es obligatorio' })}
      />
      {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

      <Input placeholder="Imagen URL" {...register('imageUrl')} />
      <Input placeholder="Descripción" {...register('description')} />
      <Input
        placeholder="Rating"
        type="number"
        step="0.1"
        {...register('rating', {
          valueAsNumber: true,
          min: { value: 0, message: 'Mínimo 0' },
          max: { value: 5, message: 'Máximo 5' },
        })}
      />
      <Input placeholder="Bono" {...register('bonus')} />
      <Input placeholder="URL" {...register('url')} />
      <Input placeholder="Giros" {...register('giros')} />
      <Input placeholder="Requisitos" {...register('requisitos')} />
      <Input placeholder="Tiempo" {...register('tiempo')} />

      <div className="mt-4 flex gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Guardando...' : 'Guardar Cambios'}
        </Button>
        <Button type="button" variant="destructive" onClick={handleDelete}>
          Eliminar
        </Button>
      </div>
    </form>
  );
}
