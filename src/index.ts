import { Server, ServerOptions } from '@hapi/hapi'
import config from './config'

const options: ServerOptions = {
    port: config.port
}

const server = new Server(options)

// TODO: Fetch and load routes


// Initialise funciton for supertest

export const init = async (): Promise<Server> => {
    await server.initialize()

    return server
}

// funciton for starting the server

export const liftOff = async (): Promise<Server> => {
    await server.start()

    // TODO: replace console with winston
    console.log(`Server running at: ${server.info.uri}`);

    return server
}