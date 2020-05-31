import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const PantallaMapaDireccionUsuario = ({navigator}) => {
    const [localizacionActual, setLocalizacion] = useState({

        latitude: 6.2392506,
        longitude: -75.6091692,
        latitudeDelta: 0.0122,
        longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
    })
    const [localizacionEscogida, setLocalizacionEscogida] = useState(false);
    const [marcador, setMarcador] = useState(null)
    const [movimiento, setMovimiento] = useState({})

    const escogerLocalizacionConClick = event => {
        const coords = event.nativeEvent.coordinate;
        console.log(coords)
        setLocalizacionEscogida({
            ...localizacionActual,
            latitude: coords.latitude,
            longitude: coords.longitude,
        })
        movimiento.animateToRegion({
            ...localizacionActual,
            latitude: coords.latitude,

        })
        setLocalizacionEscogida(true);
    }
    if (localizacionEscogida) {
        setMarcador(<MapView.Marker coordinate={localizacionActual}/>)
    }

    const gestorLocalizacion = () => {
        Geolocation.getCurrentPosition(
            posicion => {
                const coords = {
                    nativeEvent: {
                        coordinate: {
                            latitude: posicion.coords.latitude,
                            longitude: posicion.coords.longitude
                        }
                    }
                };
                escogerLocalizacionConClick(coords)
            },
            err => {
                console.log(err);
                alert("Error al obtener la localización. ¡Intenta de nuevo o escoge una manualmente!")
            })
    }

    return (
        <>
            <View>

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    marginLeft: 20,
                    marginVertical: 15,
                }}>Dirección</Text>

                <MapView
                    initialRegion={localizacionActual}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    zoomEnabled={true}
                    showsMyLocationButton={false}
                    showsUserLocation={true}
                    ref={ref => setMovimiento(ref)}
                    onPress={escogerLocalizacionConClick}
                />

                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => {
                        gestorLocalizacion()
                    }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                        paddingHorizontal: 40,
                        alignSelf: 'flex-end',
                    }}>Mi Ubicación</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.boton} onPress={() => {

                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#fff',
                        fontSize: 23,
                        paddingHorizontal: 40,
                        alignSelf: 'flex-end',
                    }}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        width: '90%',
        height: 350,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    boton: {
        backgroundColor: '#792bff',
        marginTop: 25,
        borderRadius: 6,
        padding: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
        marginBottom: 20,
    },
});

export default PantallaMapaDireccionUsuario;
