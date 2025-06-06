import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  const casinos = await prisma.casino.findMany();
  return NextResponse.json(casinos);
}

export async function POST(request: NextRequest) {
  try {
    const { name, imageUrl, description, rating, bonus, url, giros, requisitos, tiempo } = await request.json();

    const newCasino = await prisma.casino.create({
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

    return NextResponse.json(newCasino, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creando el casino' }, { status: 400 });
  }
}