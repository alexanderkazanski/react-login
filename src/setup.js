import { createStore } from "redux";
import { globalReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from 'redux-thunk';
import { applyMiddleware } from "redux";


const reduxLogger = () => next => action => {
    console.log("Action:", action);
    return next(action);
}

export const storeSetup = () => {
    let middlewares = [reduxThunk];

    if (process.env.NODE_ENV === 'development') {
        middlewares.push(reduxLogger)
    }
    return createStore(
        globalReducer,
        composeWithDevTools(applyMiddleware(...middlewares))
    )
}