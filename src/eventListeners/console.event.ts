import Podium from '@hapi/podium'
import {iplugin} from '../config/interfaces'

const plugin: iplugin =  {
    name: 'event listener',
    register: function (server, options){
        console.log("inside event")
    }
}

export default plugin