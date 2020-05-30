import {createStore, combineReducers} from 'redux';
import {alertas, citasDisponibles, citasPendientes} from './reducers';
import {} from "./actions";

const reducers = {
    citasPendientes,
    citasDisponibles,
    alertas
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
