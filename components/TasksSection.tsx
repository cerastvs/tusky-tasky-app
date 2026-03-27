"use client";

import { useContext, useState } from "react";
import { ActiveUser } from "@/context/ActiveUser";
import { TaskType } from "@/app/generated/prisma/enums";
import { Task } from "@/app/generated/prisma/browser";
import TuskModal from "./TuskModal";
type Props = {
  tasks: Task[];
  tag: TaskType[];
  head: string;
};

export default function TaskSection({ tasks, tag, head }: Props) {
  tasks = tasks.filter((task) => tag.some((t) => task.tags.includes(t)));
  const user = useContext(ActiveUser);
  const [showModal, setShowModal] = useState(false);
  const [activeTask, setActiveTask] = useState(tasks[1]);

  return (
    <section className="mb-10">
      <h2 className="text-[28px] font-bold m-0 mb-1">{head}</h2>
      <p className="m-0 mb-5 text-gray-500 text-sm">
        {tasks.length} task{tasks.length !== 1 ? "s" : ""}
      </p>

      <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col gap-3">
        {head == "DAILY ROUTINE" ? (
          <button className="w-fit self-end text-blue-600">
            Edit daily routines
          </button>
        ) : (
          <></>
        )}
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border border-gray-200 rounded-lg px-4 py-[14px] hover:bg-gray-100"
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
            <p className="m-0 text-sm text-gray-700 leading-relaxed">
              {task.description ?? ""}
            </p>
          </div>
        ))}
      </div>

      <TuskModal
        modalOpen={showModal}
        setModalOpen={setShowModal}
        task={activeTask}
      ></TuskModal>
    </section>
  );
}
