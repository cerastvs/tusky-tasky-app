import HeaderSidebarLayout from "@/components/HeaderSidebarLayout";

import prisma from "@/lib/client";

export default async function Dashboard() {
  const tasks = await prisma.task.findMany({ where: { userId: 1 } });

  return (
    <HeaderSidebarLayout pageName="Edit Tasks">
      <main className="flex-1 overflow-y-auto bg-gray-100 px-10 py-8 w-[70%]"></main>
    </HeaderSidebarLayout>
  );
}
