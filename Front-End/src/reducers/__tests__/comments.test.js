import commentsReducer from "../comments";
import { SAVE_COMMENT } from "../../actions/types";

it('handle actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
});

it(' handle action with unknown type', () => {

    const newState = commentsReducer([], {});

    const newState_ = commentsReducer([], { type: 'werwesdfsdfwe'});

    expect(newState).toEqual([]);
    
    expect(newState_).toEqual([]);
});