// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('./src/generated/prisma')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const bcrypt = require('bcryptjs')
const prisma = new PrismaClient()

async function main() {
  const hashedPassword = bcrypt.hashSync('interamplify123', 10)
  const user = await prisma.user.create({
    data: {
      email: 'admin@test.test',
      password: hashedPassword,
      name: 'Juan Pérez',
    },
  })

  console.log('Usuario creado:', user)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })