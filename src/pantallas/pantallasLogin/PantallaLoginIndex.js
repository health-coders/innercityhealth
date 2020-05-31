import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import BtnAutenticacionGoogle from '../../componentes/Autenticacion/BotonAutenticacionGoogle';
import { obtenerObjeto, USUARIO } from "../../objetoSesion/objetoSesion";

const PantallaLoginIndex = ({navigation}) => {

    console.log(obtenerObjeto(USUARIO));

    return (
        <>
            <View style={styles.contenedor}>
                <BtnAutenticacionGoogle/>

                <TouchableOpacity style={styles.btnRegistro} onPress={() => {
                    navigation.navigate('RegistroManual')
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#fff',
                        fontSize: 18,
                        paddingHorizontal: 40,
                        alignSelf: 'flex-end'
                    }}>Registro Manual</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        justifyContent: 'center'
    },
    btnRegistro: {
        backgroundColor: '#792bff',
        marginTop: 30,
        borderRadius: 6,
        padding: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
    },
});

export default PantallaLoginIndex;
