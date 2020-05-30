import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PantallaPrincipalConsultas from "./pantallas/pantallasConsultas/PantallaPrincipalConsultas";
import PantallaPrincipal from "./pantallas/PantallaPrincipal";
import PantallaMisConsulta from "./pantallas/pantallasConsultas/PantallaMisConsulta";
import PantallaAgendarConsulta from "./pantallas/pantallasConsultas/PantallaAgendarConsulta";
import PantallaPrincipalAlertas from "./pantallas/pantallasAlertas/PantallaPrincipalAlertas";

const Stack = createStackNavigator();

const Navigation = () => (
    <NavigationContainer initialRouteName='Principal'>
        <Stack.Navigator>
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
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigation;
