'use client';

import { signOutUser } from "@/actions/auth"
import { Button } from "@/components/ui/button"
import { Link } from 'next-view-transitions'
import { toast } from "sonner"
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

export function SignOutFormButton () {
  const [isPending, startTransition] = useTransition()
  const [signText, setSignText] = useState("Sign Out");
  const router = useRouter()

  async function handleSignOut (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    startTransition(async () => {
      const { success } = await signOutUser();

      if (!success) {
        toast.error("Error al cerrar sesión");
        return;
      }
      setSignText("Sign in");
      // Mostrar el toast ANTES de navegar para evitar bug
      toast.info("Has cerrado sesión")


      // Opcional: esperar un poco para que el toast sea visible
      router.push("/");

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
