import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

const PantallaPrincipalAlertas = ({navigation}) => {

    //TODO
    return (
        <>
            <TouchableOpacity
                style={styles.btnPrincipal}
                //onPress={() => navigation.navigate('')}
            >
                <Text style={styles.textoBtn}>Alerta Rápida</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnPrincipal}
                onPress={() => navigation.navigate('AlertaEspecifica')}
            >
                <Text style={styles.textoBtn}>Alerta Específica</Text>
            </TouchableOpacity>
        </>
    );
}
const styles = StyleSheet.create({
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
        elevation: 5,
        justifyContent: 'center'
    },
    textoBtn: {
        fontWeight: 'bold',
        fontSize: 35,
    },
});

export default PantallaPrincipalAlertas;
