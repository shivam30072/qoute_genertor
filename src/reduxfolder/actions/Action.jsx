import { Actiontypes } from "../constants/Actiontypes"
// action which will happen after selecting the action type
export const getQuote = (quote) => { 
    return{
        type: Actiontypes.GET_QUOTE,
        payload: quote
    }
}

export const getTag = (tag) => {
    return{
        type: Actiontypes.GET_TAG,
        payload: tag
    }
}

export const getQuoteByTag = (selectTag) =>{
   return{
    type: Actiontypes.GET_QUOTE_BY_TAG,
    payload: selectTag
   }
}