export const traerTodos = () => (dispatch) =>{
    dispatch({
        type: 'traer_usuario',
        payload: [1,2,3]
    })
}