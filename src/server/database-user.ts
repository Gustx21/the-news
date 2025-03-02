import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(name: string, email: string, password: string) {
    await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password,
            historic: {}
        }
    })
}

export { insertUser };