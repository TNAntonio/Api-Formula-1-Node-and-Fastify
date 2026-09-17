import fastify from "fastify";
import cors from "@fastify/cors"
import { drivers } from "./data/drives-data";
import { teams } from "./data/teams-data";

const server = fastify();

server.register(cors, {
    origin: "*",
})

const PORT = process.env.PORT

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200)
    return { teams }
})

server.get('/drivers', async (request, response) => {
    response.type("application/json").code(200)
    return { drivers }
})

interface DriverParams {
    id: string
}

server.get<{ Params: DriverParams }> ('/drivers/:id', async (request, response) => {
        const id = parseInt(request.params.id)
        const driver = drivers.find( (d) => d.id === id)
        
        if(!driver){
            response.type("application/json").code(404)
            return { message: "Driver Não Encontrado"}
        } else {
            response.type("application/json").code(200)
            return { driver }
        }
    })

server.listen({ port: Number(PORT) }, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})