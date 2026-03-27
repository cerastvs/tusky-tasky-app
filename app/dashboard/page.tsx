import HeaderSidebarLayout from "@/components/HeaderSidebarLayout";
import TaskSection from "@/components/TasksSection";
import { TaskType } from "../generated/prisma/enums";
import prisma from "@/lib/client";

export default async function Dashboard() {
  const tasks = await prisma.task.findMany({ where: { userId: 1 } });

  return (
    <HeaderSidebarLayout pageName="Dashboard">
      <main className="flex-1 overflow-y-auto bg-gray-100 px-10 py-8 w-[70%]">
        <TaskSection
          tasks={tasks}
          tag={[TaskType.DAILY]}
          head="DAILY ROUTINE"
        />
        <TaskSection
          tasks={tasks}
          tag={[TaskType.SPECIFIC, TaskType.DAILY]}
          head="TODAY'S TASKS"
        />
      </main>
    </HeaderSidebarLayout>
  );
}
