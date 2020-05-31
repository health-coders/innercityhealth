import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Image} from 'react-native'

const PantallaPrincipalAlertas = ({navigation}) => {

    //TODO
    return (
        <>
            <View style={{flex: 1}}>
                <TouchableOpacity
                    style={styles.btnPrincipal}
                    onPress={() => navigation.navigate('BuscandoAtencion')}
                >
                    <Image
                        style = {{ width: 200,height: 200}}
                        source={require('../../assets/HC_FastAlert.png')}
                    />

                    <Text style={styles.textoBtn}>Alerta Rápida</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex:1}}>
            <TouchableOpacity
                style={styles.btnPrincipal}
                onPress={() => navigation.navigate('AlertaEspecifica')}
            >
                <Image style={{width:200,height: 200}}source={require('../../assets/HC_ALERTA_ESP.png')}/>
                <Text style={styles.textoBtn}>Alerta Específica</Text>
            </TouchableOpacity>
            </View>
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
