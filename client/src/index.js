import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import Signup from "./components/auth/Signup";
import Welcome from "./components/Welcome";
import reducers from "./reducers";
import Feature from "./components/Feature";

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" exact element={<Welcome/>}/>
                    <Route path="/signup" exact element={<Signup/>}/>
                    <Route path="/feature" exact element={<Feature/>}/>
                </Routes>
            </App>
        </BrowserRouter>
    </Provider>, 
    document.querySelector('#root')
);