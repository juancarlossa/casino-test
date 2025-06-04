// app/actions/auth.ts
"use server";

import { signIn, signOut } from "@/auth";

export async function loginUser(formData: FormData) {
  
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

    return { success: true }
  } catch {
    // Captura cualquier otro error inesperado
    return { error: "Credenciales incorrectas" }
  }
}

export async function signOutUser() {
  
  await signOut({  redirect: false });

  console.log("Te has desconectado");
  
}