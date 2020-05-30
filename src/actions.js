export const GUARDAR_CITAS_PENDIENTES = 'GUARDAR_CITAS_PENDIENTES';
export const guardarCitasPendientes = (citas) => ({
    type: GUARDAR_CITAS_PENDIENTES,
    payload: citas,
});

export const ELIMINAR_CITA_PENDIENTE = 'ELIMINAR_CITA_PENDIENTE';
export const eliminarCitaPendiente = (citaEliminar) => ({
    type: ELIMINAR_CITA_PENDIENTE,
    payload: citaEliminar,
});
export const GUARDAR_CITA_DISPONIBLES = 'GUARDAR_CITA_DISPONIBLES';
export const guardarCitaDisponibles = (citas) => ({
    type: GUARDAR_CITA_DISPONIBLES,
    payload: citas,
});

