import { combineReducers } from "redux";
import CommentsReducer from './comments';

export default combineReducers({
    comments: CommentsReducer
});