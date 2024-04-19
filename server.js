import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

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

server.get('/videos', (request) => {
    const search = request.query.search;

    const videos = database.list(search);

    console.log(videos)
    return videos//por padrao o status 200 já significa que deu tudo certo e não inclui-lo. 
})

server.put('/videos/:id', (request, reply) => {
    const videoID = request.params.id;
    const { title, description, duration } = request.body;

    database.update(videoID, {
        title,
        description,
        duration,
    })

    return reply.status(204).send();//204 signfica uma resposta com sucesso porem sem conteudo
})

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id;

    database.delete(videoId)

    return reply.status(204).send();
})



server.listen({
    port: 3333,
})