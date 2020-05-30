import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const PantallaPrincipal = ({navigation}) => {
    return (
        <>
            <TouchableOpacity style={styles.btnPrincipal}>
                <Text style={styles.textoBtn}>Alertas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnPrincipal} onPress={()=>
                navigation.navigate('PrincipalConsultas')
            }>
                <Text style={styles.textoBtn}>Consultas</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    textoBtn: {
        fontWeight: 'bold',
        fontSize: 40,
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
        elevation: 5,
        justifyContent:'center'
    }
});

export default PantallaPrincipal;
