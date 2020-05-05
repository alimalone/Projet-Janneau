const initialState = {
  heart: "heart.white",
};

function allStore(state = initialState, action) {
  switch (action.type) {
    case "heart.red":
      return { heart: (state.heart = "heart.red") };
  case "heart.white":
      return { heart: (state.heart = "heart.white") };
    default:
      return state;
  }
}

export default allStore;
