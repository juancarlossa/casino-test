import { Session } from "next-auth";
import { SignInAButton, SignOutFormButton } from "./sign-in-out-button";
import { cookies } from "next/headers";


export async function SignInOutButton ({ session }: { session: Session | null }) {
  const cookieStore = await cookies()
  const isLogged = cookieStore.get('isLogged')?.value === 'true' ? true : false;
  console.log('[+] Cookie isLogged:', isLogged)

  return (
    <>
      {
        isLogged ?
          <SignOutFormButton />
          :
          <SignInAButton />
      }
    </>
  )
}