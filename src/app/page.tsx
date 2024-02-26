import { auth } from "@/auth";
import getUserGroups from "@/services/getUserGroups";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const userGroups = await getUserGroups();

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

      <div>
        <h1>Selecione o grupo</h1>

        <ul>
          {userGroups.map((userGroup) => (
            <li key={userGroup.group.id}>
              <Link href={`/${userGroup.group.id}`}>
                {userGroup.group.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
