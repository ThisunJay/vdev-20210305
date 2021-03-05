import fastify from 'fastify'
import {FastifyRequest, FastifyReply} from 'fastify';
import Movies from './MoviesList.json'
import fastifycors from 'fastify-cors'

const server = fastify()

server.register(fastifycors, {
    origin: true,
});

server.get('/', async (request, reply) => {
  return 'Movies API Server Running'
})

server.get('/api/movies', (request, reply: FastifyReply) => {
    try {
        reply.code(200).send({
            success: true,
            data: Movies.list,
            message: "Success"
        })
    } catch (error) {
        reply.code(500).send({
            success: false,
            data: null,
            message: "Something went wrong " + error.message
        })
    } 
})

server.get('/api/info', (request, reply: FastifyReply) => {
    try {
        reply.code(200).send({
            success: true,
            data: {
                "version": 1,
                "description": "Movies server API"
            },
            message: "Success"
        })
    } catch (error) {
        reply.code(500).send({
            success: false,
            data: null,
            message: "Something went wrong " + error.message
        })
    } 
})

server.listen(4000, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})