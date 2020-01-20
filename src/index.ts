import { Server, ServerOptions } from '@hapi/hapi'
import config from './config'
import routes from './routes'
import plugins from './config/plugins'


const options: ServerOptions = {
    port: config.port
}

const server = new Server(options)

// Initialise funciton for supertest

export const init = async (): Promise<Server> => {
    await server.route(routes)
    await server.register(plugins)
    await server.initialize()

    return server
}

// funciton for starting the server

export const liftOff = async (): Promise<Server> => {
    await init()
    await server.start()

    // TODO: replace console with winston
    console.log(`Server running at: ${server.info.uri}`);

    return server
}