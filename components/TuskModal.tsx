import React from "react";
import { Task } from "@/app/generated/prisma/client";
import MarkerButton from "./MarkerButton";
type Props = {
  setModalOpen: (open: boolean) => void;
  task: Task | null;
};

function TuskModal({ setModalOpen, task }: Props) {
  if (!task) return null;
  console.log(task.timeStart);
  const formatTime = (date: Date) =>
    new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  return (
    <>
      <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-4">
        <div className="flex items-end gap-2">
          <h3 className="text-2xl font-bold text-gray-900">{task.title}</h3>{" "}
          <span
            className={`px-2 py-1 rounded-full text-sm font-medium ${
              task.status === "COMPLETED"
                ? "bg-green-100 text-green-800"
                : task.status === "MISSED"
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {task.status}
          </span>
        </div>
        <button
          aria-label="Close"
          className="text-gray-400 hover:text-gray-700 text-3xl font-bold transition-colors"
          onClick={() => setModalOpen(false)}
        >
          &times;
        </button>
      </div>

      <div className="space-y-4 text-gray-700">
        {task.description && (
          <p className="text-gray-600">{task.description}</p>
        )}

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <div className="font-medium">
            {task.timeStart ? formatTime(task.timeStart) : "No time set"}
            {task.timeEnd ? " - " + formatTime(task.timeEnd) : ""}
          </div>
        </div>

        {task.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {task.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end gap-3 mt-6 border-t border-gray-200 pt-3">
        <button
          className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          onClick={() => setModalOpen(false)}
        >
          Close
        </button>
        <MarkerButton status={task.status} taskId={task.id} />
      </div>
    </>
  );
}

export default TuskModal;
