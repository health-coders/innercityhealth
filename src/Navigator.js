import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PantallaPrincipalConsultas from "./pantallas/pantallasConsultas/PantallaPrincipalConsultas";
import PantallaPrincipal from "./pantallas/PantallaPrincipal";

const Stack = createStackNavigator();

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='PrincipalConsultas'
                component={PantallaPrincipalConsultas}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Principal'
                component={PantallaPrincipal}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigation;
