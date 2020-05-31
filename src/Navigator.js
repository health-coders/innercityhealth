import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PantallaPrincipalConsultas from './pantallas/pantallasConsultas/PantallaPrincipalConsultas';
import PantallaPrincipal from './pantallas/PantallaPrincipal';
import PantallaMisConsulta from './pantallas/pantallasConsultas/PantallaMisConsulta';
import PantallaAgendarConsulta from './pantallas/pantallasConsultas/PantallaAgendarConsulta';
import PantallaPrincipalAlertas from './pantallas/pantallasAlertas/PantallaPrincipalAlertas';
import PantallaInfoConsulta from './pantallas/pantallasConsultas/PantallaInfoConsulta';
import PantallaAlertaEspecifica from './pantallas/pantallasAlertas/PantallaAlertaEspecifica';
import PantallaLoginIndex from './pantallas/pantallasLogin/PantallaLoginIndex';
import {obtenerObjeto, USER} from './paquetes/sessionObject/sessionObject';
import PantallaMapaDireccionUsuario from "./pantallas/pantallasMapas/PantallaMapaDireccionUsuario";


const Stack = createStackNavigator();

const Navigation = () => {

    let initialScreen = 'Principal';
    obtenerObjeto(USER).then(res => {
        console.log('OBJETO GUARDADO. PANTALLA NAVIGATION ', res)
        if (!res) {
            initialScreen = 'Login'
        }
    })

    return <NavigationContainer initialRouteName={initialScreen}>
        <Stack.Navigator>
            <Stack.Screen name='MapaDireccionUsuario'
                          component={PantallaMapaDireccionUsuario}
                          options={{headerShown: false}}
            />
            <Stack.Screen name='Login'
                          component={PantallaLoginIndex}
                          options={{headerShown: false}}
            />
            <Stack.Screen
                name='Principal'
                component={PantallaPrincipal}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='PrincipalConsultas'
                component={PantallaPrincipalConsultas}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='MisConsultas'
                component={PantallaMisConsulta}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='AgendarConsulta'
                component={PantallaAgendarConsulta}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='PrincipalAlertas'
                component={PantallaPrincipalAlertas}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='InfoConsulta'
                component={PantallaInfoConsulta}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='AlertaEspecifica'
                component={PantallaAlertaEspecifica}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
};

export default Navigation;
