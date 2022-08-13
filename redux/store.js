import reducer from "./reducers/index";
import { createStore } from 'redux';

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState);
    return store;
}
