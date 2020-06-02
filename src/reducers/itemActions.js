const itemActions = (
  state = {
    favourites: [],
  },
  action
) => {
  switch (action.type) {
    case "DOOR_FAVOURITE":
      return {
        ...state,
        favourites: [...state.favourites, action.code],
      };

    case "REMOVE_FAVOURITE":
      const favourites = state.favourites.filter(
        (item) => item !== action.code
      );
      console.log(favourites);
      return {
        ...state,
        favourites,
      };
    default:
      
      return state;
  }
};

export default itemActions;
