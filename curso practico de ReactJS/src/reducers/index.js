
const reducer = (state, action) => {

    switch(action.type){

        case 'SET_FAVORITE':
            return {
                ...state,
                mylist:[...state.mylist, action.payload ]
            }

        case 'DELETE_FAVORITE':
            return{
                ...state,
                mylist: state.mylist.filter(items => items.id !== action.payload)
            }

        case 'LOGIN_REQUEST':
            return{
                ...state,
                user:action.payload,
            } 
            
        case 'LOGOUT_REQUEST':
            return{
                ...state,
                user: action.payload,
            }
        
        case 'REGISTER_REQUEST':
            return{
                ...state,
                user: action.payload,     
            }
        
        case 'GET_VIDEO_SOURCE':
            return{
                ...state,
                playing: state.trends.find(items => items.id === Number(action.payload)) || 
                state.originals.find(items => items.id === Number(action.payload))
            }

        case 'GET_VIDEO_SEARCH':
            if (action.payload === ""){
                return { ...state, searching:{} }
            }else{
                const listSearch = [...state.trends, ...state.originals];
                return{
                    ...state,
                        searching: listSearch.filter(
                        items => items.title.toLowerCase().includes(
                            action.payload.toLocaleLowerCase())
                        )
                }
            }
        default:
            return state;
    }

};


export default reducer;