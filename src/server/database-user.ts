import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string) {
    return await prisma.users.create({
        data: {
            email: email
        }
    })
}

async function getUserByEmail(email: string) {
    return await prisma.users.findUnique({
        where: {
            email: email
        }
    })
}

export { insertUser, getUserByEmail };