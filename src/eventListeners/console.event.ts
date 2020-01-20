import Podium from '@hapi/podium'
import {iplugin} from '../config/interfaces'


const plugin: iplugin =  {
    name: 'event listener',
    register: async function (server, options){
        const emitter: Podium = new Podium()
        
        emitter.registerEvent({
            name: 'index.route',
            channels: ['log']
        })

        server.app['emitter'] = emitter

        emitter.on("index.route", async (payload) => console.log(payload))

    }
}

export default plugin