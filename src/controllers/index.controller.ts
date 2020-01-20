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

    return h.response(payload)

}