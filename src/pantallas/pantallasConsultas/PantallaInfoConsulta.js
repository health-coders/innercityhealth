import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';

const PantallaInfoConsulta = ({navigation, route}) => {

    const {item} = route.params;

    return (
        <>
            <ScrollView style={styles.contenedor}>
                <View style={{marginBottom:30}}>
                    <Text style={styles.titulo}>
                        Consulta {item.tipo}
                    </Text>

                    <View>
                        <Text style={styles.texto}>
                            Paciente:
                            <Text style={{fontWeight: 'bold', fontSize: 20}}> {item.nombrePaciente + '\n'}</Text>
                        </Text>

                        <Text style={styles.texto}>Descripción: {item.descripcion + '\n'}</Text>
                        <Text style={styles.texto}>Fecha: {item.fecha}</Text>
                        <Text style={styles.texto}>Hora: {item.hora}</Text>
                        <Text style={styles.texto}>Dirección {item.direccion}</Text>

                        <TouchableOpacity
                            style={styles.botonVolver}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={{color: 'white', fontSize: 20}}>Volver</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </>
    )
        ;
};

const styles = StyleSheet.create({
    titulo: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 10,
    },
    contenedor: {
        padding: 10,
        marginHorizontal: 20,
    },
    texto: {
        fontSize: 20,
    },
    botonVolver: {
        backgroundColor: '#792bff',
        marginTop: 12,
        borderRadius: 6,
        padding: 5,
        paddingHorizontal: 10,
        alignSelf: 'flex-end',
    },
});

export default PantallaInfoConsulta;
