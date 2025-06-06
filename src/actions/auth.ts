// app/actions/auth.ts
"use server";

import { signIn, signOut } from "@/auth";
import { cookies } from "next/headers";

export async function loginUser(formData: FormData) {
  const cookieStore = await cookies()
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  try {
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    if (!res || res.error) {
      return { error: "Credenciales incorrectas" }
    }
    cookieStore.set('isLogged', 'true')

    return { success: true }
  } catch {
    // Captura cualquier otro error inesperado
    return { error: "Credenciales incorrectas" }
  }
}

export async function signOutUser() {
  const cookieStore = await cookies()

  try {
    await signOut({  redirect: false });

    console.log("Te has desconectado");
    cookieStore.set('isLogged', 'false')

    return { success: true };
    
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    return { error: "Error al cerrar sesión" };
  }
}