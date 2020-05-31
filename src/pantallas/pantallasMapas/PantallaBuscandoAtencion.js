import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapMarker from "react-native-maps/lib/components/MapMarker";

const PantallaBuscandoAtencion = () => {

    const [aceptado, setAceptado] = useState(false)
    const localizacionActualPaciente = {
        latitude: 6.2392506,
        longitude: -75.6091692,
        latitudeDelta: 0.0122,
        longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
    }

    let localizacionActualParamedico;
    useEffect(() => {
        localizacionActualParamedico = {
            latitude: 6.2526318,
            longitude: -75.5752376,
        };
        if (aceptado) {
            setmarcadorParamedico(<MapView.Marker coordinate={localizacionActualParamedico}/>)
        }
    }, [])

    const [marcadorParamedico, setmarcadorParamedico] = useState(null)


    return (
        <>
            <MapView
                initialRegion={localizacionActualPaciente}
                region={localizacionActualPaciente}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                zoomEnabled={true}
                showsMyLocationButton={false}
                showsUserLocation={true}
            >
                <MapView.Marker coordinate={localizacionActualPaciente}/>
                {marcadorParamedico}
            </MapView>

        </>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '90%',
        height: 350,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20
    },
});

export default PantallaBuscandoAtencion;
