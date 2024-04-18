import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";
import { title } from "node:process";

const server = fastify();

const database = new DatabaseMemory();

server.post('/videos', (request, reply) => {  
    const { title, description, duration } = request.body;

    database.create({
        title,
        description,
        duration,
    })

    return reply.status(201).send();
})

server.get('/videos', () => {
    const videos = database.list();

    console.log(videos)
    return videos//por padrao o status 200 já significa que deu tudo certo e não inclui-lo. 
})

server.put('/videos/:id', (request) => {
    const videoID = request.params.id;
    const { title, description, duration } = request.body;

    database.update(videoID, {
        title,
        description,
        duration,
    })

    return reply.status(204).send();//204 signfica uma resposta com sucesso porem sem conteudo
})

server.delete('/video/:id', () => {

})



server.listen({
    port: 3333,
})