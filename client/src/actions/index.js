import axios from 'axios';
import { AUTH_USER } from "./types";

// redux-thunk allows us to call many function as we want and to manipulate or dispatch function
export const signup = (formProps) => (dispatch) => {
    axios.post('http://localhost:3300/signup', formProps);
};