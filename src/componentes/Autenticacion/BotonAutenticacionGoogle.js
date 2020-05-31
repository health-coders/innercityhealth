import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {useNavigation} from '@react-navigation/core';
import {guardarObjeto, obtenerObjeto, USER} from '../../paquetes/sessionObject/sessionObject';


const BtnAutenticacionGoogle = () => {

    const navigation = useNavigation();

    GoogleSignin.configure({
        webClientId: '892945320827-ppfpdca4ujrondilks742cj4ma7i3848.apps.googleusercontent.com' // client ID of type WEB for your server (needed to verify user ID and offline access)
    });

    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        this.setState({isLoginScreenPresented: !isSignedIn});
    };

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();

            await guardarObjeto(USER, userInfo);
            console.log('Objeto guardado desde Boton autenticación: ',obtenerObjeto(USER));

            navigation.navigate('Principal');
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
            console.log(error);
        }
    };

    return (
        <TouchableOpacity
            style={styles.googleBtn}
            onPress={signIn}
        >
            {/*<Image*/}
            {/*    style={styles.googleLogo}*/}
            {/*    source={require('../../assets/images/googleLogo.png')}*/}
            {/*/>*/}
            <Text style={styles.googleBtnText}>Registro con Google</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    googleBtn: {
        width: '70%',
        backgroundColor: '#ff6613',
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        paddingHorizontal: 30,
        paddingVertical: 20,
        flexDirection: 'row',
    },
    googleBtnText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
    },
    googleLogo: {
        height: 40,
        width: 40,
        marginRight: 10,
    },
});
export default BtnAutenticacionGoogle;
