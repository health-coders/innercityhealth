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
import PantallaMapaDireccionUsuario from "./pantallas/pantallasMapas/PantallaMapaDireccionUsuario";
import PantallaCompletarPerfil from './pantallas/pantallasLogin/PantallaCompletarPerfil';
import PantallaRegitroManual from "./pantallas/pantallasLogin/PantallaRegistroManual";
import PantallaBuscandoAtencion from "./pantallas/pantallasMapas/PantallaBuscandoAtencion";

const Stack = createStackNavigator();

const Navigation = () => {

    return <NavigationContainer initialRouteName='Login'>
        <Stack.Navigator>


            <Stack.Screen
                name='Login'
                component={PantallaLoginIndex}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='RegistroManual'
                component={PantallaRegitroManual}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='BuscandoAtencion'
                component={PantallaBuscandoAtencion}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name='CompletarPerfil'
                component={PantallaCompletarPerfil}
                options={{headerShown: false}}
            />


            <Stack.Screen
                name='MapaDireccionUsuario'
                component={PantallaMapaDireccionUsuario}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name='Principal'
                component={PantallaPrincipal}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name='AgendarConsulta'
                component={PantallaAgendarConsulta}
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
                name='InfoConsulta'
                component={PantallaInfoConsulta}
                options={{headerShown: false}}
            />


            <Stack.Screen
                name='PrincipalAlertas'
                component={PantallaPrincipalAlertas}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='AlertaEspecifica'
                component={PantallaAlertaEspecifica}
                options={{headerShown: false}}
            />


        </Stack.Navigator>
    </NavigationContainer>;
};

export default Navigation;
