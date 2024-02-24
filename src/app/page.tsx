import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      {session?.user ? (
        <div>
          <p>Olá {session?.user?.name}</p>
          <Link href="/api/auth/signout">Logout</Link>
        </div>
      ) : (
        <div>
          <Link href="/api/auth/signin">Signin</Link>
        </div>
      )}
    </main>
  );
}
