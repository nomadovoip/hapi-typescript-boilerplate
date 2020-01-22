import {Request, ResponseToolkit} from '@hapi/hapi'
import response from '../utils/response'
import { Boom } from '@hapi/boom'


export default async (request: Request, h: ResponseToolkit): Promise<any> => {

    let payload = response(
        200,
        {
            message: "Hello #hapi.js from #Typescript!"
        }
    )
    
    request.server.events.emit('IndexRoute', "Event triggers from Index route.")

    return h.response(payload)

}