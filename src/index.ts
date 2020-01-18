import { Server, ServerOptions } from '@hapi/hapi'
import config from './config'

const options: ServerOptions = {
    port: config.port
}

const server = new Server(options)
