import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BtnAutenticacionGoogle from '../../componentes/Autenticacion/BotonAutenticacionGoogle';

const PantallaLoginIndex = () => {

    return (
        <>
            <View style={styles.contenedor}>
                <BtnAutenticacionGoogle/>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        justifyContent: 'center'
    }
});

export default PantallaLoginIndex;
