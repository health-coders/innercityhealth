import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PantallaPrincipalConsultas from "./pantallas/pantallasConsultas/PantallaPrincipalConsultas";

const Stack = createStackNavigator();

const Navigation = () => (
    <Navigation.Contanier>
        <Stack.Screen
        name='PrincipalConsultas'
        component={{PantallaPrincipalConsultas}}
        options={{headerShown: false}}
        /><Stack.Screen
        name='Home'
        component={{PantallaPrincipal}}
        options={{headerShown: false}}
        />
    </Navigation.Contanier>
);

export default Navigation;
