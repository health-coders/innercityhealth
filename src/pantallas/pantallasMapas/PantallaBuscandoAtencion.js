import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const PantallaBuscandoAtencion = () => {

    const localizacionActual = {
        latitude: 6.2392506,
        longitude: -75.6091692,
        latitudeDelta: 0.0122,
        longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
    }

    return (
        <>
            <MapView
                    initialRegion={localizacionActual}
                    region={localizacionActual}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    zoomEnabled={true}
                    showsMyLocationButton={false}
                    showsUserLocation={true}
                />

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
