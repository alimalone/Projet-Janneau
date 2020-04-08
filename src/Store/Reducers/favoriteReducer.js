const initialState = { favoritesDoor: [] }



function toggleFavorite(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const favoriteDoorIndex = state.favoritesDoor.findIndex(item => item.unique_code === action.value.unique_code)
            if (favoriteDoorIndex !== -1) {
                nextState = {
                    ...state,
                    favoritesDoor: state.favoritesDoor.filter ( (item, index) => index !== favoriteDoorIndex)

                }
            }
            else {
                nextState = {
                    ...state,
                    favoritesDoor: [...state.favoritesDoor, action.value]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default toggleFavorite