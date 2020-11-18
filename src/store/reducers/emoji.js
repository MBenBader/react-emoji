const initial_states = {
    emojis :[],
    filtre: "",
    filtreByKW: []
}
const emojiReducer = (state = initial_states, action) => {
    switch (action.type) {
        case "SET_EMOJIS" :
            return {
                ...state,
                emojis: action.payload
            }
        case "SET_FILTRE" :
            return {
                ...state,
                filtre: action.payload
            }
        case "SET_FILTRE_BY_KW" :
            return {
                ...state,
                filtreByKW: action.payload
            }
        default : return state
    }
}
export default emojiReducer;