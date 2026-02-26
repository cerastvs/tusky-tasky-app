import TaskSection from "@/components/TasksSection";
import { tasks } from "@/lib/tasks";
import HeaderSidebarLayout from "@/components/HeaderSidebarLayout";
export default function Dashboard() {
  return (
    <HeaderSidebarLayout pageName="Dashboard">
      <main className="flex-1 overflow-y-auto bg-gray-100 px-10 py-8 w-[70%]">
        <TaskSection tasks={tasks} tag={["DAILY"]} head="DAILY ROUTINE" />

        <TaskSection
          tasks={tasks}
          tag={["SPECIFIC", "DAILY"]}
          head="TODAY'S TASKS"
        />
      </main>
    </HeaderSidebarLayout>
  );
}
