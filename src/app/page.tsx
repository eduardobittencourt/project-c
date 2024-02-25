import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      {session?.user ? (
        <div>
          {session.user?.image && (
            <div>
              <Image
                src={session.user.image}
                alt={session.user.name ?? ""}
                width={36}
                height={36}
              />
            </div>
          )}
          <p>Olá {session.user.name}</p>
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
