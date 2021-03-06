import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {guardarCitaDisponibles} from '../../actions';
import connect from 'react-redux/lib/connect/connect';
import shortid from 'shortid';
import {postearAPI} from '../../servicios/serviciosApp';
import {obtenerObjeto} from '../../objetoSesion/objetoSesion';

const PantallaAgendarConsulta = ({navigation, onGuardarCitasDisponibles, route}) => {

    const shortid = require('shortid');
    const cita = route.params;

    const [descripcionConsulta, guardarDescripcionConsulta] = useState('');
    const [tipoConsulta, setTipoConsulta] = useState('');
    const [esVisibleDatePicker, setEsVisibleDatePicker] = useState(false);
    const [esVisibleTimePicker, setEsVisibleTimePicker] = useState(false);

    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');

    const mostrarDatePicker = () => {
        setEsVisibleDatePicker(true);
    };

    const ocultarDatePicker = () => {
        setEsVisibleDatePicker(false);
    };

    const confirmarFecha = (fecha) => {
        setFecha(fecha.toLocaleDateString('es-ES', {year: 'numeric', day: '2-digit', month: 'long'}));
        ocultarDatePicker();
    };
    const confirmarHora = (hora) => {
        setHora(hora.toLocaleString('en-US', {hour: 'numeric', minute: '2-digit'}));
        ocultarTimePicker();
    };

    const mostrarTimePicker = () => {
        setEsVisibleTimePicker(true);
    };

    const ocultarTimePicker = () => {
        setEsVisibleTimePicker(false);
    };

    const guardarCita = () => {

        Alert.alert('CITA REGISTRADA', 'Su cita se ha registrado exitosamente', ['Ok']);
        setTimeout(() => {
            navigation.goBack();
        }, 1000);
        //guardarCitaDisponibles(cita)

    };

    return (
        <>
            <ScrollView onPress={() => Keyboard.dismiss()}>
                <View>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 31,
                        marginLeft: 20,
                        marginVertical: 15,
                        textAlign: 'center',
                    }}>Agendar una consulta</Text>

                    <View>


                        <Picker
                            style={styles.picker}
                            selectedValue={tipoConsulta}
                            onValueChange={(valor) => setTipoConsulta(valor)}
                        >
                            <Picker.Item label='- Tipo de consulta -' value=''/>
                            <Picker.Item label='General' value='General'/>
                            <Picker.Item label='Específica' value='Específica'/>
                        </Picker>

                        <Text style={styles.subtitulo}> Motivo de la consulta: </Text>

                        <TextInput
                            placeholder='Motivo de la consulta...'
                            multiline={true}
                            style={styles.textInput}
                            onChangeText={text => {
                                guardarDescripcionConsulta(text);
                            }}
                        />

                        <Text style={styles.subtitulo}>Fecha y Hora de la consulta</Text>

                        <TouchableOpacity style={styles.btnSeleccionar} onPress={mostrarDatePicker}>
                            <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 16, paddingHorizontal: 5}}>
                                Seleccionar Fecha
                            </Text>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={esVisibleDatePicker}
                            mode="date"
                            onConfirm={confirmarFecha}
                            onCancel={ocultarDatePicker}
                        />

                        <Text style={{
                            marginHorizontal: 20,
                            fontSize: 16,
                            marginVertical: 10,
                        }}>
                            Fecha: {fecha}
                        </Text>

                        <TouchableOpacity style={styles.btnSeleccionar} onPress={mostrarTimePicker}>
                            <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 16, paddingHorizontal: 5}}>
                                Seleccionar Hora
                            </Text>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={esVisibleTimePicker}
                            mode='time'
                            onConfirm={confirmarHora}
                            onCancel={ocultarTimePicker}
                            is24Hour={false}
                        />

                        <Text style={{
                            marginHorizontal: 20,
                            fontSize: 16,
                            marginVertical: 10,
                        }}>
                            Hora: {hora}
                        </Text>

                        <TouchableOpacity style={styles.btnContinuar} onPress={() => {
                            guardarCita();
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                color: '#fff',
                                fontSize: 18,
                                paddingHorizontal: 40,
                                alignSelf: 'flex-end',
                            }}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>

    );

};

const styles = StyleSheet.create({
    subtitulo: {
        marginHorizontal: 20,
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    textInput: {
        width: '85%',
        height: 230,
        alignSelf: 'center',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 3,
    },
    picker: {
        alignSelf: 'center',
        width: '70%',
        backgroundColor: '#dcdcdc',
        borderRadius: 15,
    },
    btnSeleccionar: {
        backgroundColor: '#792bff',
        marginTop: 30,
        borderRadius: 6,
        padding: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
    },

    btnContinuar: {
        backgroundColor: '#fc0008',
        marginTop: 12,
        borderRadius: 6,
        padding: 6,
        paddingHorizontal: 10,
        alignSelf: 'center',
        marginBottom: 20,

    },
});
//TODO
const mapDispatchToProps = dispatch => ({
    onGuardarCitasDisponibles: cita => dispatch(guardarCitaDisponibles(cita)),
});

export default connect(null, mapDispatchToProps)(PantallaAgendarConsulta);
