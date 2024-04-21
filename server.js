import { fastify } from "fastify";
// import { DatabaseMemory } from "./database-memory.js";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();

// const database = new DatabaseMemory();

const database = new DatabasePostgres();

server.post('/videos', async (request, reply) => {  
    const { title, description, duration } = request.body;

    await database.create({
        title,
        description,
        duration,
    })

    return reply.status(201).send();
})

server.get('/videos', async (request) => {
    const search = request.query.search;

    const videos = await database.list(search);

    console.log(videos)
    return videos//por padrao o status 200 já significa que deu tudo certo e não inclui-lo. 
})

server.put('/videos/:id', async (request, reply) => {
    const videoID = request.params.id;
    const { title, description, duration } = request.body;

    await database.update(videoID, {
        title,
        description,
        duration,
    })

    return reply.status(204).send();//204 signfica uma resposta com sucesso porem sem conteudo
})

server.delete('/videos/:id', async (request, reply) => {
    const videoId = request.params.id;

    await database.delete(videoId)

    return reply.status(204).send();
})



server.listen({
    port: 3333,
})