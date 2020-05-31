import AsyncStorage from '@react-native-community/async-storage';

export const guardarObjeto= async (key, value)=>{
    try{
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch(e){
        console.log(e)
    }
}

export const obtenerObjeto= async (key)=>{
    try{
        return await AsyncStorage.getItem(key);
    } catch(e){
        console.log(e)
    }
}

export const removerObjeto= async (key)=>{
    try{
        await AsyncStorage.removeItem(key);
    } catch(e){
        console.log(e)
    }
}

//CONSTANTES DE OBJETOS GUARDADOS

export const USUARIO = 'USUARIO'
