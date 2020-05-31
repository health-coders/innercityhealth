import AsyncStorage from '@react-native-community/async-storage';

export const guardarObjeto = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log(e)
    }
}

export const obtenerObjeto = async (key) => {
    try {
        await AsyncStorage.getItem(key);
    } catch (e) {
        console.log(e)
    }
}

export const eliminarObjeto = async (key) => {
    try {
        await AsyncStorage.setItem(key);
    } catch (e) {
        console.log(e)
    }
}

//LLAVES DE ALMACENAMIENTO DE OBJETOS

export const USER = 'USER';
