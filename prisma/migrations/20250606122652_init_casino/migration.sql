-- CreateTable
CREATE TABLE "Casino" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT,
    "description" TEXT,
    "rating" DOUBLE PRECISION,
    "bonus" TEXT,
    "url" TEXT,
    "giros" TEXT,
    "requisitos" TEXT,
    "tiempo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Casino_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Casino_name_key" ON "Casino"("name");
