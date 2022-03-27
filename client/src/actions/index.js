import axios from 'axios';
import { AUTH_ERROR, AUTH_USER } from "./types";

// redux-thunk allows us to call many function as we want and to manipulate or dispatch function
export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post(
            'http://localhost:3300/signup',
            formProps
        );

        dispatch({ type: AUTH_USER, payload: response.data.token });

        // save your token in the localStorage 
        localStorage.setItem('token', response.data.token);

        callback();
    }
    catch(e) {
        dispatch ({ type: AUTH_ERROR, payload: 'Email in Use' });
    }
};

export const signout = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload: ''
    }
}