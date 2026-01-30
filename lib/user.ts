import prisma from "./client";

const userDb = { 

    getUserByCredentials: async function (username:string, userPassword: string) {
        const user = await prisma.user.findFirst({
            where:{name: username, password: userPassword}
        })

        return user
    },

    getUser: async function (userId: number){
        return await prisma.user.findUnique({
            where:{id: userId}
        })
    }

}
export default userDb