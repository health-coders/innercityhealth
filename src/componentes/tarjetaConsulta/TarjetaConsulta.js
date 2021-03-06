import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const TarjetaConsulta = ({info}) => {

    const {item} = info;

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.targetaConsulta}>
                <View>
                    <Text style={styles.textoNombrePaciente}>
                        {item.nombrePaciente}
                    </Text>
                    <Text style={styles.texto}>
                        Consulta {item.tipo}
                    </Text>
                    <Text style={styles.texto}>
                        Fecha: {item.fecha}
                    </Text>
                    <Text style={styles.texto}>
                        Hora: {item.hora}
                    </Text>
                    <Text style={styles.texto}>
                        Dirección: {item.direccion}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.texto}>
                            Estado:
                        </Text>
                        <Text style={{
                            color: item.estado ? '#00e600' : '#ff1a1a',
                            fontSize: 18,
                            alignSelf: 'center',
                            marginHorizontal: 10
                        }}>{item.estado ? 'Agendada':'En espera'}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.botonMasInfo}
                    onPress={() => navigation.navigate('InfoConsulta', info)}
                >
                    <Text style={{color: 'white', fontSize: 20}}>Más info.</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    targetaConsulta: {
        borderRadius: 15,
        backgroundColor: '#fafafa',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        width: '90%',
        padding: 20,
        marginHorizontal: 20,
        alignItems: 'flex-start',
        marginVertical: 10,
    },
    texto: {
        fontSize: 20,
    },
    textoNombrePaciente:{
        fontSize: 20,
        fontWeight:'bold'
    },
    botonMasInfo: {
        backgroundColor: '#792bff',
        marginTop: 12,
        borderRadius: 6,
        padding: 5,
        paddingHorizontal: 10,
        alignSelf: 'flex-end',
    },
});

export default TarjetaConsulta;
