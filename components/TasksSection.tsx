"use client";

import { useContext, useState } from "react";
import { ActiveUser } from "@/context/ActiveUser";
import { TaskType } from "@/app/generated/prisma/enums";
import { Task } from "@/app/generated/prisma/browser";
import TuskModal from "./TuskModal";
import ModalContainer from "./ModalContainer";

type Props = {
  tasks: Task[];
  tag: TaskType[];
  head: string;
};

export default function TaskSection({ tasks, tag, head }: Props) {
  const user = useContext(ActiveUser);

  const filteredTasks = tasks.filter((task) =>
    tag.some((t) => task.tags.includes(t)),
  );

  const groupedTasks = filteredTasks.reduce(
    (acc, task) => {
      if (!task.timeStart) return acc;

      const dateKey = new Date(task.timeStart).toDateString();

      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }

      acc[dateKey].push(task);

      return acc;
    },
    {} as Record<string, Task[]>,
  );

  const sortedEntries = Object.entries(groupedTasks).sort(
    ([a], [b]) => new Date(a).getTime() - new Date(b).getTime(),
  );

  const [showModal, setShowModal] = useState(false);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  return (
    <section className="mb-10">
      <h1 className="text-[28px] font-bold mb-5">{head}</h1>

      {sortedEntries.map(([date, tasksForDay]) => (
        <div key={date} className="mb-10">
          <h2 className="text-[22px] font-bold mb-1">{date}</h2>

          <p className="text-gray-500 text-sm mb-4">
            {tasksForDay.length} task
            {tasksForDay.length !== 1 ? "s" : ""}
          </p>

          <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col gap-3">
            {head === "DAILY ROUTINE" && (
              <button className="w-fit self-end text-blue-600">
                Edit daily routines
              </button>
            )}

            {tasksForDay.map((task) => (
              <div
                key={task.id}
                className="border border-gray-200 rounded-lg px-4 py-[14px] hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setActiveTask(task);
                  setShowModal(true);
                }}
              >
                <div className="flex items-baseline gap-2 mb-2 justify-between">
                  <span className="font-semibold text-base">{task.title}</span>

                  <div
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      task.status === "COMPLETED"
                        ? "bg-green-100 text-green-800"
                        : task.status === "MISSED"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {task.status}
                  </div>
                </div>

                <p className="text-sm text-gray-700">
                  {task.description ?? ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {activeTask && (
        <ModalContainer modalOpen={showModal}>
          <TuskModal setModalOpen={setShowModal} task={activeTask} />
        </ModalContainer>
      )}
    </section>
  );
}
