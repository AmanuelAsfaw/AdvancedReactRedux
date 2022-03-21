import axios from "axios";
import { FETCH_COMMENTS, SAVE_COMMENT, CHANGE_AUTH } from "./types";

export function saveComment(comment) {
    return {
        type : SAVE_COMMENT,
        payload : comment
    };
}

export function fetchComments() {
    const response = axios.get('https://jsonplaceholder.cypress.io/posts')
    // const response = axios.get('http://gbfs.citibikenyc.com/gbfs/en/station_information.json')
    console.log(response);
    return {
        type: FETCH_COMMENTS,
        payload: response

    }
}

export function changeAuth(isLoggedIn) {
    return {
        type : CHANGE_AUTH,
        payload : isLoggedIn
    };
}