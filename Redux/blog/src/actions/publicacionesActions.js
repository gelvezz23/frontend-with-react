import axios from 'axios';
import {TRAER_POR_USUARIO, CARGANDO, ERROR} from './../types/publicacionesTypes'
/** 
 * TRAER TODAS LAS PUBLICACIONES 
 * 
export const traerTodos = () => async (dispatch) => {
    dispatch({
		type: CARGANDO
	});
    try{
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: TRAER_TODOS,
            payload: respuesta.data
        })
    }catch(error){
        console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'Algo a salido mal Error :'+ error.message
		})

    }
};
*/



export const traerPorUsuario = (key) => async (dispatch, getState) => {
    const { usuario } = getState().usuarioReducer;
    const { publicaciones } = getState().publicacionesReducer; 
    const usuario_id = usuario[key].id
    const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`);

    const publicaciones_actualizadas = [
        ...publicaciones,
        respuesta.data
    ]

   
    
    dispatch({
        type: TRAER_POR_USUARIO,
        payload: publicaciones_actualizadas
    })
}