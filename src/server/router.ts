import fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors  from "@fastify/cors";
import { insertUser } from "./database.ts";

const server = fastify({ logger:true });
server.register(cors, { origin: "*" });

// Validadondo Propriedades
type ParamsUserRequest = {
    name: string,
    email: string
}

server.post("/user", async (request: FastifyRequest, reply:  FastifyReply): Promise<void> => {
    try {
        const user = request.body as ParamsUserRequest;
        const { name, email } = user;

        if (!name || !email) {
            reply.status(400).send("Valores incorretos");
            return;
        }

        await insertUser(email, name);

        reply.status(201);
    } catch (error) {
        reply.status(400).send(error);
    }
})