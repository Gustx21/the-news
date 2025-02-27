import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(name: string, email: string) {
    await prisma.user.create({
        user: {
            name: name,
            email: email
        }
    })
}

export { insertUser };