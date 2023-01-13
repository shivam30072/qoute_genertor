import { quoteReducer, tagReducer, selectedTagReducer } from "./Quotereducer";
import {combineReducers} from 'redux'

// combining reducers using combinereducer

 const reducers = combineReducers({
    quote: quoteReducer,
    tag: tagReducer,
    selectedTag: selectedTagReducer
})

export default reducers