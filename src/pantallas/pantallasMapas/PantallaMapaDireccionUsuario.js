import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';

const PantallaMapaDireccionUsuario = () => {

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

    return (
        <>
            <View>
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
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '90%',
        height: 350,
        alignSelf:'center',
        borderRadius:10,
        marginTop: 20
    }
});

export default PantallaMapaDireccionUsuario;
