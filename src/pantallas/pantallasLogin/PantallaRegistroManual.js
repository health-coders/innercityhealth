import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'

const PantallaRegitroManual = ({navigation}) => {

    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [correo,setCorreo] = useState('')
    const [contrasegna,setcontrasegna] = useState('')
    const [ConfirmarContrasegna,setConfirmarContrasegna] = useState('')

    return (
        <>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 26,
                alignSelf: 'center',
                marginVertical: 15
            }}>Registro Manual</Text>

            <Text style={styles.subtitulo}>Nombre: </Text>

            <TextInput
                placeholder='Nombre'
                multiline={true}
                style={styles.textInput}
            />
            <Text style={styles.subtitulo}>Apellido: </Text>

            <TextInput
                placeholder='Apellido'
                multiline={true}
                style={styles.textInput}
            />
            <Text style={styles.subtitulo}>Correo: </Text>

            <TextInput
                placeholder='Correo'
                multiline={true}
                style={styles.textInput}
            />
            <Text style={styles.subtitulo}>Contraseña: </Text>

            <TextInput
                placeholder='Contraseña'
                multiline={true}
                style={styles.textInput}
            />
            <Text style={styles.subtitulo}>Confirmar Contraseña: </Text>

            <TextInput
                placeholder='Confirmar Contraseña'
                multiline={true}
                style={styles.textInput}
            />

            <TouchableOpacity style={styles.btnContinuar} onPress={() => {

                navigation.navigate('')
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: '#fff',
                    fontSize: 18,
                    paddingHorizontal: 40,
                    alignSelf: 'flex-end'
                }}>Continuar</Text>
            </TouchableOpacity>

        </>
    );
}

const styles = StyleSheet.create({
    textInput: {
        width: '90%',
        height: 60,
        alignSelf: 'center',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
    },
    subtitulo: {
        marginHorizontal: 10,
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    btnContinuar: {
        backgroundColor: '#792bff',
        marginTop: 30,
        borderRadius: 6,
        padding: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
    },
});

export default PantallaRegitroManual;
