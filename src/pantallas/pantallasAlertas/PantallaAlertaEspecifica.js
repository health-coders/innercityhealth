import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-community/picker';

const PantallaAlertaEspecifica = () => {

    const [prioridadAlerta, setprioridadAlerta] = useState('')
    return (
        <>
            <ScrollView style={styles.contenedor}>
                <View style={{marginBottom:20}}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 26,
                        alignSelf: 'center',
                        marginVertical: 15
                    }}>Generar alerta específica</Text>


                    <Text style={styles.subtitulo}> Prioridad de la Alerta:</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={prioridadAlerta}
                        onValueChange={(valor) => setprioridadAlerta(valor)}
                    >
                        <Picker.Item label='- Prioridad de la Alerta -' value=''/>
                        <Picker.Item label='Alta (Se ve comprometida la vida del paciente)' value='Alta'/>
                        <Picker.Item label='Media (Se requiere atención rápida)' value='Media'/>
                        <Picker.Item label='Baja (Requiere atención básica)' value='Baja'/>
                    </Picker>

                    <Text style={styles.subtitulo}> Descrición de la Alerta </Text>

                    <TextInput
                        //TODO: Corregir el posicionamiento del placeholder
                        placeholder='Descripción de lo sucedido'
                        multiline={true}
                        style={styles.textInput}
                    />

                    <TouchableOpacity style={styles.btnSeleccionar} onPress={() => {
                        //TODO: Redirigir a pantalla de mapas
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: '#fff',
                            fontSize: 18,
                            paddingHorizontal: 40,
                            alignSelf: 'flex-end'
                        }}>Solicitar ayuda</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    picker: {
        alignSelf: 'center',
        width: '70%',
        backgroundColor: '#dcdcdc',
        borderRadius: 15,
        marginBottom:10
    },
    subtitulo: {
        marginHorizontal: 20,
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    textInput: {
        width: '100%',
        height: 180,
        alignSelf: 'center',
        borderRadius: 10,
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
    btnSeleccionar: {
        backgroundColor: '#792bff',
        marginTop: 20,
        borderRadius: 6,
        padding: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
    },

});

export default PantallaAlertaEspecifica;
