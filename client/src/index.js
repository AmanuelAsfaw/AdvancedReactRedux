import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./components/App";
import Signup from "./components/auth/Signup";
import Welcome from "./components/Welcome";
import reducers from "./reducers";

ReactDOM.render(
    <Provider store={createStore(reducers, {}) }>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" exact element={<Welcome/>}/>
                    <Route path="/signup" exact element={<Signup/>}/>
                </Routes>
            </App>
        </BrowserRouter>
    </Provider>, 
    document.querySelector('#root')
);