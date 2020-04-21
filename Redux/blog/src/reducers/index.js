import {combineReducers} from 'redux'
import usuarioReducer from './usuarioReducer'
import publicacionesReducer from './publicacionesReducer'

export default combineReducers({
    usuarioReducer,
    publicacionesReducer
})