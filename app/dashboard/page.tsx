const tagColorMap: Record<string, string> = {
  DAILY: "bg-amber-400 text-white",
  PENDING: "bg-yellow-400 text-white",
  UNDONE: "bg-gray-500 text-white",
  DONE: "bg-green-500 text-white",
};

export default function Dashboard() {
  const routineTasks = [
    {
      title: "Study",
      time: "7:00am - 10:00am",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Walking",
      time: "5:00pm - 6:30pm",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const todayTasks = [
    {
      title: "Study",
      time: "7:00am - 10:00am",
      tags: ["DAILY", "PENDING"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Eat Lunch",
      time: "12:00pm - 1:00pm",
      tags: ["UNDONE"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className="flex h-screen font-sans">
      <aside className="w-[320px] shrink-0 bg-white border-r border-gray-200 flex flex-col px-4 py-6">
        <div className="font-bold text-lg tracking-wider mb-8">TUSKY</div>
        <nav className="flex flex-col gap-1">
          <a
            href="#"
            className="flex items-center gap-[10px] px-3 py-[10px] rounded-lg text-blue-600 font-semibold no-underline bg-blue-50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-[10px] px-3 py-[10px] rounded-lg text-gray-700 no-underline hover:bg-gray-100 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            Community
          </a>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="flex items-center justify-between px-7 h-[60px] bg-white border-b border-gray-200 shrink-0">
          <span className="font-bold text-base tracking-widest">DASHBOARD</span>
          <div className="w-10 h-10 rounded-full bg-gray-900" />
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-100 px-10 py-8 w-[70%]">
          <section className="mb-10">
            <h2 className="text-[28px] font-bold m-0 mb-1">
              LIEU RIK&apos;S ROUTINE
            </h2>
            <p className="m-0 mb-5 text-gray-500 text-sm">
              {routineTasks.length} Daily tasks
            </p>

            <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col gap-3">
              {routineTasks.map((task, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg px-4 py-[14px]"
                >
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-semibold text-base">
                      {task.title}
                    </span>
                    <span className="text-blue-600 text-[13px]">
                      {task.time}
                    </span>
                  </div>
                  <p className="m-0 text-sm text-gray-700 leading-relaxed">
                    {task.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[28px] font-bold m-0 mb-1">Tasks</h2>
            <p className="m-0 mb-5 text-gray-500 text-sm">
              {todayTasks.length} tasks for today!
            </p>

            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="m-0 mb-4 font-semibold text-base">
                January 1, 2026
              </p>
              <div className="flex flex-col gap-3">
                {todayTasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg px-4 py-[14px]"
                  >
                    <div className="flex items-center justify-between mb-2 gap-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-base">
                          {task.title}
                        </span>
                        <span className="text-blue-600 text-[13px]">
                          {task.time}
                        </span>
                      </div>
                      <div className="flex gap-1.5 shrink-0">
                        {task.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2.5 py-0.5 rounded-md text-xs font-semibold tracking-wide ${tagColorMap[tag] ?? "bg-gray-400 text-white"}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="m-0 text-sm text-gray-700 leading-relaxed">
                      {task.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
