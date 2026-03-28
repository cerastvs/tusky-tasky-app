import HeaderSidebarLayout from "@/components/HeaderSidebarLayout";
import TaskSection from "@/components/TasksSection";
import { TaskType } from "../generated/prisma/enums";
import prisma from "@/lib/client";

export default async function Dashboard() {
  const start = new Date();
  const end = new Date();
  end.setDate(start.getDate() + 7);

  const tasks = await prisma.task.findMany({
    where: {
      userId: 1,
      timeStart: {
        gte: start,
        lte: end,
      },
    },
    orderBy: {
      timeStart: "asc",
    },
  });

  const dailyTasks = await prisma.task.findMany({
    where: {
      userId: 1,
      tags: {
        has: TaskType.DAILY,
      },
    },
  });

  return (
    <HeaderSidebarLayout pageName="Dashboard">
      <main className="flex-1 overflow-y-auto bg-gray-100 px-10 py-8 w-[70%]">
        <TaskSection
          tasks={dailyTasks}
          tag={[TaskType.DAILY]}
          head="DAILY ROUTINE"
        />
        <TaskSection
          tasks={tasks}
          tag={[TaskType.SPECIFIC]}
          head="TODAY'S TASKS"
        />
      </main>
    </HeaderSidebarLayout>
  );
}
