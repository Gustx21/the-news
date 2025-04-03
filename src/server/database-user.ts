import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(name: string, email: string, password: string) {
    return await prisma.users.create({
        data: {
            name: name,
            email: email,
            password: password
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