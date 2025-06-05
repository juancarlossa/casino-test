'use client';

import { signOutUser } from "@/actions/auth"
import { Button } from "@/components/ui/button"
import { Link } from 'next-view-transitions'
import { useSession } from "next-auth/react"
import { toast } from "sonner"
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export function SignOutFormButton () {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  async function handleSignOut (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    startTransition(async () => {
      await signOutUser();

      // Mostrar el toast ANTES de navegar
      toast.info("Has cerrado sesión");
      // Opcional: esperar un poco para que el toast sea visible
      setTimeout(() => {
        router.push("/");
      }, 500);
    });
  }

  return (
    <form onSubmit={handleSignOut}>
      <Button disabled={isPending} type="submit" className="bg-card-contacto">Sign Out</Button>
    </form>
  )
}

export function SignInAButton () {
  return (
    <Button asChild className="bg-card-contacto">
      <Link href="/login">Sign In</Link>
    </Button>
  )
}

export function SignInOutButton () {
  const { data: session } = useSession()

  if (session) {
    return <SignOutFormButton />
  }

  return (
    <SignInAButton />
  )
}