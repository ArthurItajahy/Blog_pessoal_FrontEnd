import {Action} from './action';

// Alter a Interface de TokenState para UserState, 
// e adicione o campo ID
export interface UserState{
    tokens: string,
    id: string
}

const initialState = {
    tokens: "" ,
    id: ""
}

export const userReducer = (state: UserState = initialState, action: Action) =>{
    switch(action.type){
        case "ADD_TOKEN":{
            /*
            
                Seguindo a Interface UserState, 
                retornamos o token com a informação adionada 
                e o id com a informação inicial dele
                token => jasdjklasjdkal and id = ' '(valor initial)    
            */
            return {tokens: action.payload, id: state.id } // 
        }

        case "ADD_ID":{
            /*
                Seguindo a Interface UserState, 
                retornamos o ID coma informação adionada
                e o token com a informação inicial dele
                Id = 1(Ex: Id do usuario) 
                token => '' ( ou se já tiver iniciado coloque o 
                    token = "skjdlasjdlkasjdklasj") 
            */            
            return{id: action.payload, tokens: state.tokens}
        }

        default:
            return state
    }
}