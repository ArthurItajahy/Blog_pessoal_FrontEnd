// Altere o tipo da Ação usando o Operador OR(|)
export type Action =  {type: "ADD_TOKEN"|"ADD_ID"; payload: string}

export const addToken = (token: string): Action =>({
    type:"ADD_TOKEN",
    payload: token
    
})
// Adione o tipo de Ação para pegar o ID
export const addId = (id:string): Action =>({
    type:"ADD_ID",
    payload: id
    
})