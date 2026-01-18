import Image from "next/image";
import prisma from "@/lib/client";
export default async function Home() {

  const user = await prisma.user.findMany()

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ul>
        {user.map((u)=>(
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
      
    </div>
  );
}
