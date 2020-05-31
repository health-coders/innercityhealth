import {GUARDAR_CITAS_PENDIENTES, ELIMINAR_CITA_PENDIENTE, GUARDAR_CITA_DISPONIBLES,GENERAR_ALERTA_RAPIDA} from './actions';

export const citasPendientes = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case GUARDAR_CITAS_PENDIENTES:{
            return payload;
        }
        case ELIMINAR_CITA_PENDIENTE:{
            const citaEliminar = payload;
            return state.filter(cita => cita.descripcion !== citaEliminar.descripcion);
        }
        default:
            return state;
    }

};
export const citasDisponibles = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case GUARDAR_CITA_DISPONIBLES:{
            return payload;
        }
        default:
            return state;
    }
};

export const alertas=(state=[],action)=>{
    const {type,payload}=action;

    switch (type) {
        case  GENERAR_ALERTA_RAPIDA:{
            return payload;
        }
        default:
            return state;
    }
}
