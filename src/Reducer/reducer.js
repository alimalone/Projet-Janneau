
import initialState from "./configureStore";


const reducer = (state = initialState, action) => {
    const newState = JSON.parse(JSON.stringify(state));

    switch (action.type){
        case "DOOR_LIKE":
            const doorLike = action.data;
            newState.DoorLike = [];
            doorLike.map(obj => {
                return newState.DoorLike.push(obj);
            });
            return newState;
        
        default:
            return newState;
    }
};

export default reducer;



