import {createStore, combineReducers} from 'redux';
import {citasDisponibles, citasPendientes} from './reducers';

const reducers = {
    citasPendientes,
    citasDisponibles
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
