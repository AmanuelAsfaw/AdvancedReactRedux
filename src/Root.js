import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxPromise from "redux-promise";
import async from './middlewares/async';
import reducers from './reducers';

const Root = ({children, initialState}) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(async)
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
    
};

export default Root;