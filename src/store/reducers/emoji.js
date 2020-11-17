const initial_states = {
    emojis :[]
}
const emojiReducer = (state = initial_states, action) => {
    switch (action) {
        case "SET_EMOJIS" :
            return {
                ...state,
                emojis: action.payload
            }
        default : return state
    }
}
export default emojiReducer;