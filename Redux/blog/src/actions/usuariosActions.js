import axios from 'axios'

export const traerTodos = () => async (dispatch) =>{

    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
        type: 'traer_usuario',
        payload: response.data
    })
}