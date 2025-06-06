import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  if (isNaN(id)) return NextResponse.json({ error: 'ID inválido' }, { status: 400 });

  const casino = await prisma.casino.findUnique({ where: { id } });

  if (!casino) return NextResponse.json({ error: 'Casino no encontrado' }, { status: 404 });

  return NextResponse.json(casino);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  if (isNaN(id)) return NextResponse.json({ error: 'ID inválido' }, { status: 400 });

  try {
    const { name, imageUrl, description, rating, bonus, url, giros, requisitos, tiempo } = await request.json();

    const updatedCasino = await prisma.casino.update({
      where: { id },
      data: {
        name,
        imageUrl,
        description,
        rating: rating ? parseFloat(rating) : undefined,
        bonus,
        url,
        giros,
        requisitos,
        tiempo,
      },
    });

    return NextResponse.json(updatedCasino);
  } catch (error) {
    return NextResponse.json({ error: 'Error actualizando el casino' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  if (isNaN(id)) return NextResponse.json({ error: 'ID inválido' }, { status: 400 });

  try {
    await prisma.casino.delete({ where: { id } });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Error eliminando el casino' }, { status: 400 });
  }
}
