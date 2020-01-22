import {iplugin} from '../config/interfaces'


const plugin: iplugin =  {
    name: 'event listener',
    register: async function (server, options){
        
        server.event('IndexRoute')

        // @ts-ignore
        server.events.on('IndexRoute', (payload) => console.log(payload))

    }
}

export default plugin