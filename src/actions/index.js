import { DOOR_FAVOURITE, REMOVE_FAVOURITE } from "../constants/ActionTypes";

export const doorFavourite = code => ({
  type: DOOR_FAVOURITE,
  code
});

export const removeFavourite = code => ({
  type: REMOVE_FAVOURITE,
  code
});