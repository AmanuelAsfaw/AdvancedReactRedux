import { SAVE_COMMENT, FETCH_COMMENTS } from "../actions/types";

const comments = function(state = [], action) {
    switch(action.type){
        case SAVE_COMMENT:
            return [...state, action.payload, {}];
        case FETCH_COMMENTS:
            debugger;
            console.log(action.payload.data);
            const comments = action.payload.data.map(comment => comment.title);
            console.log(comments);
            return [...state, ...comments];
        default:
            return state;
    }
};
export default comments;