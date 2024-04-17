import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory;

server.post('/videos', () => {  
    
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