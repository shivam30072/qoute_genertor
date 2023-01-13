import { Actiontypes } from "../constants/Actiontypes";

// all the three reducers that we need to store the state 
export const quoteReducer = (state = [], {type, payload}) => {
  switch (type) {
    case Actiontypes.GET_QUOTE:
        return  {...state, payload};
    default:
        return state;
  }
}

export const tagReducer = (state = [], {type, payload}) => {
  switch (type) {
    case Actiontypes.GET_TAG:
        return  {...state, ...payload};
    default:
        return state;
  }
}

export const selectedTagReducer = (state = [], {type, payload}) => {
  switch (type) {
    case Actiontypes.GET_QUOTE_BY_TAG:
      return {...state, payload};
    default:
      return state;
  }
}