import {Request, ResponseToolkit} from '@hapi/hapi'

export interface Iroute {
    method: String | String[],
    path: String,
    handler(request: Request, h: ResponseToolkit): any
}