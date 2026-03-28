"use client";

import HeaderSidebarLayout from "@/components/HeaderSidebarLayout";
import TaskSection from "@/components/TasksSection";
import { TaskType } from "../generated/prisma/enums";
import { useEffect, useState } from "react";
import { Task } from "@/app/generated/prisma/browser";

export default function Dashboard() {
  const [dailyTasks, setDailyTasks] = useState<Task[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("/api/task")
      .then((res) => res.json())
      .then((data) => {
        setDailyTasks(data.dailyTasks ?? []);
        setTasks(data.tasks ?? []);
      })
      .catch((err) => console.error(err));
  }, []);

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
