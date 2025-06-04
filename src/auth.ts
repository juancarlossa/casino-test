import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "./lib/prisma"
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {

        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;
        // logic to verify if the user exists
        const user = await prisma.user.findUnique({
          where: {
            email
          },
        })

        if (!user) {
          throw new Error("Invalid credentials.")
        }
        if (!password) {
          throw new Error("Password is required.");
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          throw new Error("Contraseña incorrecta");
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password : _password, ...userWithoutPassword } = user;

        return {
          ...userWithoutPassword,
          id: String(user.id), // <- ¡conversión a string aquí!
        };
      },
    }),
  ],
})
