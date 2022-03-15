import { SAVE_COMMENT, FETCH_COMMENTS } from "../actions/types";

const comments = function(state = [], action) {
    switch(action.type){
        case SAVE_COMMENT:
            return [...state, action.payload];
        case FETCH_COMMENTS:
            console.log(action.payload.data);
            const comments = action.payload.data.data.stations.slice(0,10).map(comment => comment.short_name);
            console.log(comments);
            return [...state, ...comments];
        default:
            return state;
    }
};
export default comments;