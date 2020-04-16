import axios from 'axios'
import {TRAER_TODOS, CARGANDO, ERROR} from './../types/usuariosTypes'


export const traerTodos = () => async (dispatch) =>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')

        dispatch({
            type:CARGANDO,
        });

        dispatch({
            type: TRAER_TODOS,
            payload: response.data
        })
    }catch(error){

        dispatch({
            type:ERROR,
            payload:error.message
        })
        console.log('Error : '+ error.message)

    }
    
}