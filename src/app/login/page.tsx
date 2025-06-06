
import { ParticlesFull } from "@/components/juankui/particles";
import { FormSubmitLogin } from "./form-submit";
import { auth } from "@/auth";
import { User } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { Span } from "@/components/juankui/span";

export default async function LoginPage () {
  const session = await auth()
  const users = await prisma.user.findMany();

  if (session) {
    return (
      <section className="flex flex-col space-y-5 bg-gradient-to-b from-indigo-800 to-indigo-950 py-20 lg:flex-row">
        <div className="bg-card-contacto mx-auto w-full max-w-md rounded-none border border-indigo-400 md:rounded-2xl md:p-8">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            You are already logged in
          </h2>
          <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            Welcome back, {session.user?.email}
          </p>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>

        <div className="mx-auto w-full max-w-md space-y-3 rounded-lg border border-amber-400 px-5 py-3">
          <h3>Usuarios</h3>
          {
            users.map((user: User) => (
              <li key={user.id} className="mb-2">
                {user.name}
              </li>
            ))
          }
        </div>
      </section>
    )
  }

  return (
    <>
      <ParticlesFull />
      <section id="sobre-nosotros" className="flex h-screen items-center justify-center bg-gradient-to-b from-indigo-800 to-indigo-950">
        <div className="shadow-input bg-card-contacto mx-auto w-full max-w-md rounded-none border border-indigo-400 md:rounded-2xl md:p-8">
          <h2 className="text-center text-xl font-bold text-neutral-200">
            Welcome to Anced
          </h2>
          <Span className="mb-5 mt-3" />
          <p className="mb-4 mt-2 max-w-sm text-sm text-neutral-300">
            Login to aceternity if you can because we don&apos;t have a login flow
            yet
          </p>
          <FormSubmitLogin />

        </div>
      </section>
    </>
  );
}


