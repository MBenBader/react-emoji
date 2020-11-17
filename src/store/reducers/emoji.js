const initial_states = {
    emojis :[],
    filtre: ""
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
        default : return state
    }
}
export default emojiReducer;