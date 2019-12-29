import { combineReducers } from 'redux' ; 
import { postReducer } from './posts/postReducers';

export default combineReducers({
    posts : postReducer 
})