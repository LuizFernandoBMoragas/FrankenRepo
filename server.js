import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";
import { title } from "node:process";

const server = fastify();

const database = new DatabaseMemory();

server.post('/videos', (request, reply) => {  
    database.create({
        title: 'Video 01',
        description: 'Esse é o primeiro video',
        duration: 180,
    })

    console.log(database.list());

    return reply.status(201)
})

server.get('/video', () => {

})

server.put('/videos/:id', () => {

})

server.delete('/video/:id', () => {

})



server.listen({
    port: 3333,
})