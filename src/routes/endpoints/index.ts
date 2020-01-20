import {Iroute} from '../../config/interfaces'
import response from '../../utils/response'
import indexController from '../../controllers/index.controller'

const route: Iroute = {
    path: '/',
    method: 'GET',
    handler: indexController
}

export default route