import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-community/picker';

const PantallaCompletarPerfil = () =>{

    const [eps, setEps] = useState('')

    return (
        <>
            <ScrollView style={styles.contenedor}>
                <View style={{marginBottom:20}}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 26,
                        alignSelf: 'center',
                        marginVertical: 15
                    }}>Completar Perfil</Text>


                    <Text style={styles.subtitulo}> Eps:</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={eps}
                        onValueChange={(valor) => setEps(valor)}
                    >
                        <Picker.Item label='- EPS -' value=''/>
                        <Picker.Item label='Sura' value='Sura'/>
                        <Picker.Item label='Coomeva' value='Coomeva'/>
                        <Picker.Item label='Nueva EPS' value='NuevaEps'/>
                    </Picker>
                    <Text style={styles.subtitulo}> Descrición de la Alerta </Text>

                    <TextInput

                        placeholder='Descripción del Domicilio'
                        multiline={true}
                        style={styles.textInput}
                    />
                    <TouchableOpacity style={styles.btnRegistrar} onPress={() => {

                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: '#fff',
                            fontSize: 18,
                            paddingHorizontal: 40,
                            alignSelf: 'flex-end'
                        }}>Registrar</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
            </>
    )
}
const styles = StyleSheet.create({
    picker: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#dcdcdc',
        borderRadius: 15,
        marginBottom:10
    },
    subtitulo: {
        marginHorizontal: 10,
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    textInput: {
        width: '100%',
        height: 180,
        alignSelf: 'center',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
    },
    contenedor: {
        padding: 5,
        marginHorizontal: 20,
    },
    btnRegistrar: {
        backgroundColor: '#792bff',
        marginTop: 30,
        borderRadius: 6,
        padding: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
    },
});