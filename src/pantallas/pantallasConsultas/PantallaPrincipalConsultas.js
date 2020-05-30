import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {guardarCitaDisponibles, guardarCitasPendientes} from '../../actions';

const PantallaPrincipalConsultas = ({navigation, onGuardarCitasPendientes, onGuardarCitasDisponibles}) => {

    useEffect(() => {
        onGuardarCitasDisponibles([{
            id: '1',
            tipo: 'General',
            nombrePaciente: 'Franky Guevara',
            fecha: 'Hoy',
            hora: 'Ahora',
            estado: true,
            descripcion: 'Descripción 1 muy crack de la cita',
            direccion: 'Cra 84 #33 AA-01',
        },
            {
                id: '2',
                tipo: 'General',
                nombrePaciente: 'Prince Bostock',
                fecha: 'Hoy',
                hora: 'Ahora',
                estado: true,
                descripcion: 'Descripción 1 muy crack de la cita',
                direccion: 'Cra 84 #33 AA-01',
            },
            {
                id: '3',
                tipo: 'General',
                nombrePaciente: 'Ayomide Henson',
                fecha: 'Hoy',
                hora: 'Ahora',
                estado: true,
                descripcion: 'Descripción 2 muy crack de la cita',
                direccion: 'Cra 84 #33 AA-01',
            },
            {
                id: '4',
                tipo: 'General',
                nombrePaciente: 'Madison Welsh',
                fecha: 'Hoy',
                hora: 'Ahora',
                estado: true,
                descripcion: 'Descripción 3 muy crack de la cita',
                direccion: 'Cra 84 #33 AA-01',
            },
        ]);
        onGuardarCitasPendientes([
            {
                id: '1',
                tipo: 'General',
                nombrePaciente: 'Hernan Pérez',
                fecha: 'Hoy',
                hora: 'Ahora',
                estado: false,
                descripcion: 'Descripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loreDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita lorem',
                direccion: 'Cra 84 #33 AA-01',
            },
            {
                id: '2',
                tipo: 'General',
                nombrePaciente: 'Luis Pérez',
                fecha: 'Hoy',
                hora: 'Ahora',
                estado: false,
                descripcion: 'Descripción 1 muy crack de la cita',
                direccion: 'Cra 84 #33 AA-01',
            },
            {
                id: '3',
                tipo: 'General',
                nombrePaciente: 'Andrés Pérez',
                fecha: 'Hoy',
                hora: 'Ahora',
                estado: false,
                descripcion: 'Descripción 2 muy crack de la cita',
                direccion: 'Cra 84 #33 AA-01',
            },
            {
                id: '4',
                tipo: 'General',
                nombrePaciente: 'Hermejilda Bedoya',
                fecha: 'Hoy',
                hora: 'Ahora',
                estado: false,
                descripcion: 'Descripción 3 muy crack de la cita',
                direccion: 'Cra 84 #33 AA-01',
            },
        ]);
    }, []);

    return (
        <>
            <TouchableOpacity
                onPress={() => navigation.navigate('Disponibles')}
                style={styles.btnPrincipal}>
                <Text
                    style={styles.textoBtn}
                >
                    CONSULTAS DISPONIBLES
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnPrincipal}
                              onPress={() => navigation.navigate('Pendientes')}
            >
                <Text style={styles.textoBtn}> CONSULTAS PENDIENTES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnPrincipal}
                              onPress={() => navigation.navigate('Registradas')}
            >
                <Text
                    style={styles.textoBtn}
                >CONSULTAS REGISTRADAS
                </Text>
            </TouchableOpacity>


        </>
    );
};

const styles = StyleSheet.create({
    textoBtn: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        alignContent: 'center',
    },
    btnPrincipal: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        alignItems: 'center',
        margin: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        justifyContent: 'center',
    },
});

const mapDispatchToProps = dispatch => ({
    onGuardarCitasPendientes: citas => dispatch(guardarCitasPendientes(citas)),
    onGuardarCitasDisponibles: citas => dispatch(guardarCitaDisponibles(citas))
});

export default connect(null, mapDispatchToProps)(PantallaPrincipalConsultas);
