import prisma from "./client";

const taskDb = {

    getTask: async function (taskid:number) {
        return await prisma.task.findFirst({
            where: {id: taskid}
        })
    },

    getTasksForUser: async function (uid:number) {
        return await prisma.task.findMany({
            where: {userId: uid}
        })
    }
}

export default taskDb