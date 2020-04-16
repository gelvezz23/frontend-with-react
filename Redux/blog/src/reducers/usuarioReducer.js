import {TRAER_TODOS} from './../types/usuariosTypes'

const INITIAL_STATE = {
    usuario:[]
};
export default (state = INITIAL_STATE, action ) =>{
    switch(action.type){   
        case TRAER_TODOS:
            return {...state, usuario:action.payload}
        default: return state
    }
}
