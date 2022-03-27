import axios from 'axios';
import { AUTH_ERROR, AUTH_USER } from "./types";

// redux-thunk allows us to call many function as we want and to manipulate or dispatch function
export const signup = (formProps) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3300/signup', formProps);

        dispatch({ type: AUTH_USER, payload: response.data.token });
    }
    catch(e) {
        dispatch ({ type: AUTH_ERROR, payload: 'Email in Use' });
    }
};