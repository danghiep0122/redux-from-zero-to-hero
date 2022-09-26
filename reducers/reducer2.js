const reducer1 = (state = '', action) => {
    switch (action.type) {
        case "SMTHG": {
            return state = action.payload
        }
        default: {
            return state
        }
    }
}

export default reducer1
