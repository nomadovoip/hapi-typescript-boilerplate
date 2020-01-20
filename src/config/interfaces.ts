import { Request, ResponseToolkit } from '@hapi/hapi'
import { Server } from '@hapi/hapi'

export interface iroute {
    method: String | String[],
    path: String,
    handler(request: Request, h: ResponseToolkit): any
}

export interface iplugin {
    name: String,
    version?: String,
    register(server: Server, options: any): void
    
}