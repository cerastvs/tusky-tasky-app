import { TaskStatus } from "@/app/generated/prisma/enums";
import { useRouter } from "next/navigation";
type Props = {
  status: TaskStatus;
  taskId: number;
};

export default function MarkerButton({ status, taskId }: Props) {
  const router = useRouter();
  async function handleClick(status: TaskStatus, taskId: number) {
    const res = await fetch("/api/task/status", {
      method: "POST",
      body: JSON.stringify({ status, id: taskId }),
    });

    router.refresh();
  }
  if (status === TaskStatus.PENDING) {
    return (
      <button
        className="px-6 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
        onClick={() => handleClick(TaskStatus.COMPLETED, taskId)}
      >
        Mark as Done
      </button>
    );
  }
  if (status === TaskStatus.COMPLETED) {
    return (
      <button
        className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
        onClick={() => handleClick(TaskStatus.PENDING, taskId)}
      >
        Mark as Undone
      </button>
    );
  }

  return (
    <button disabled className="px-6 py-2 rounded-lg bg-gray-300 text-white">
      Missed
    </button>
  );
}
