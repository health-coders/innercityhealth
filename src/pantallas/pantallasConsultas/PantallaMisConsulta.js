import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import TarjetaConsulta from '../../componentes/tarjetaConsulta/TarjetaConsulta';
import {connect} from 'react-redux';


const PantallaMisConsulta = ({navigation, citasPendientes}) => {

    return (
        <>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 30,
                marginLeft: 20,
                marginVertical:15
            }}>Consultas Pendientes</Text>

            <FlatList
                style={styles.contenedor}
                data={citasPendientes}
                keyExtractor={(cita) => cita.id}
                renderItem={(cita) => (
                    <TarjetaConsulta
                        info={cita}
                        navigation={navigation}
                    />
                )}
            />
        </>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        paddingTop: 10,
    },
});

const mapStateToProps = state => ({
    citasPendientes: state.citasPendientes
})

export default connect(mapStateToProps, null)(PantallaMisConsulta);
