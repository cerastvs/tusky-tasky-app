import { TaskStatus } from "@/app/generated/prisma/enums";
type Props = {
  status: TaskStatus;
  taskId: number;
};

function handleClick(status: TaskStatus, taskId: number) {}

export default function MarkerButton({ status, taskId }: Props) {
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
      <button className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
        Mark as Undone
      </button>
    );
  }

  return <button>Other</button>;
}
