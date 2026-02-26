type Task = {
  title: string;
  time: string;
  description: string;
  tags: string[];
  date: string;
};

type Props = {
  tasks: Task[];
  tag: string[];
  head: string;
};

export default function TaskSection({ tasks, tag, head }: Props) {
  tasks = tasks.filter((task) => tag.some((t) => task.tags.includes(t)));
  return (
    <>
      <section className="mb-10">
        <h2 className="text-[28px] font-bold m-0 mb-1">{head}</h2>
        <p className="m-0 mb-5 text-gray-500 text-sm">
          {tasks.length} task{tasks.length > 1 ? "s" : ""}
        </p>

        <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col gap-3">
          <button className="w-fit self-end text-blue-600">
            Edit daily routines
          </button>
          {tasks.map((task, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg px-4 py-[14px]"
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-semibold text-base">{task.title}</span>
                <span className="text-blue-600 text-[13px]">{task.time}</span>
              </div>
              <p className="m-0 text-sm text-gray-700 leading-relaxed">
                {task.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
