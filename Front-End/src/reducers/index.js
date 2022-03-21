import { combineReducers } from "redux";
import CommentsReducer from './comments';
import authReducer from './auth';

export default combineReducers({
    comments: CommentsReducer,
    auth: authReducer   
});