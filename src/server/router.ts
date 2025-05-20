import fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors  from "@fastify/cors";
import { getUserByEmail, insertUser } from "./database-user.ts";

const server = fastify({ logger:true });
server.register(cors, { origin: "*" });

// Propriety Validation
type ParamsUserRequest = {
    email: string
}

server.post("/user", async (request: FastifyRequest, reply:  FastifyReply): Promise<void> => {
    try {
        const user = request.body as ParamsUserRequest;
        const { email } = user;

        if (!email) {
            reply.status(400).send("Valores incorretos");
            return;
        }

        await insertUser(email);

        reply.status(201).send("Inserção do email ao banco: sucesso.");
    } catch (error) {
        reply.status(400).send(error);
    }
})

server.get("/", async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    try {
        const email: string = '';
        const userData = await getUserByEmail(email);

        reply.status(200).send(userData);
    } catch (error) {
        reply.status(400).send(error);
    }
})

server.listen({ port: 5000 });