import {Request, ResponseToolkit} from '@hapi/hapi'
import response from '../utils/response'
import { Boom } from '@hapi/boom'
import Podium from '@hapi/podium'


export default async (request: Request, h: ResponseToolkit): Promise<any> => {

    let payload = response(
        200,
        {
            message: "Hello #hapi.js from #Typescript!"
        }
    )
    
    const emitter = request.server.app['emitter']

    emitter.emit('index.route', "Index route!")

    return h.response(payload)

}