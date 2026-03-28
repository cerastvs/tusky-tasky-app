import { TaskType } from "@/app/generated/prisma/enums";
import prisma from "@/lib/client";

export async function GET(req: Request) {
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

  return new Response(JSON.stringify({ tasks, dailyTasks }), { status: 200 });
}
