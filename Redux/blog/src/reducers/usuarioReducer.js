const INITIAL_STATE = {
    usuario:[]
};

export default (state = INITIAL_STATE, action ) =>{
    switch(action.type){
        
        case 'traer_usuario':
            return {...state, usuario:action.payload}
        
        default: return state
    }

}