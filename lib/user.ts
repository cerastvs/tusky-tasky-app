import prisma from "./client";

export default async function getUser(userId: number){
    return prisma.user.findUnique({
        where:{id: userId}
    })
}