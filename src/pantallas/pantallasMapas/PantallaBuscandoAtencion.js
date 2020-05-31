import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableHighlight} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const PantallaBuscandoAtencion = () => {

    const [aceptado, setAceptado] = useState(true)
    const localizacionActualPaciente = {
        latitude: 6.2392506,
        longitude: -75.6091692,
        latitudeDelta: 0.0122,
        longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
    }

    const [marcadorParamedico, setmarcadorParamedico] = useState(null)
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



    return (
        <>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 30,
                marginLeft: 20,
                marginVertical: 15,
                alignSelf: 'center'
            }}>Solicitando ayuda...</Text>

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

            <TouchableHighlight style={{
                backgroundColor: aceptado ? '#ff0000' : '#43ff0f',
                marginTop: 20,
                borderRadius: 6,
                padding: 5,
                paddingHorizontal: 10,
                alignSelf: 'center',
            }}>

                <Text style={{color: aceptado?'#fff': '#000', fontSize: 20}}>{aceptado ? 'En camino' : 'Solicitando ayuda'}</Text>
            </TouchableHighlight>

        </>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '90%',
        height: 450,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    boton: {},
});

export default PantallaBuscandoAtencion;
