import { View, Text, TextInput, Button, Alert, StyleSheet, Platform } from 'react-native'
import React, {useState} from 'react';

export default function TextScreen() {

  const [nombre, setNombre]= useState('');
  const MostrarAlerta = ()=>{
     if(nombre.trim() === ''){
      if(Platform.OS == 'web'){
        alert('Por favor, escribe tu nombre antes de continuar.');
      } else {
        Alert.alert(
          'Atencion'
          `Por favor, escribe tu nombre antes de continuar`,
          [
            {text: 'cancelar'},
            {text: 'aceptar'}
          ]
        );
      }
     }
     else{
      if(Platform.OS === 'web'){
        alert(`Bienvenido, ${nombre}!`);
      }
      else{
        Alert.alert(
          'Hola', `Bienvenido, ${nombre}!`,
        [
          {text: 'cancelar'},
          {text: 'aceptar'}
        ]
      );
      }
     }


  };

  return (
    <View style={styles.container}>
      <Text style= {styles.titulo}> Practica: TextInput y Alert</Text>

      <TextInput 
      style={styles.input}
      placeholder= "Escribe tu nombre"
      value= {nombre}
      onChangeText={setNombre}
      />

      <Button title= "Mostrar alerta" onPress={MostrarAlerta}/>
    </View>
  );

  
      
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },

  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,

  },
input:{
  borderWidth: 1,
  borderColor: "white",
  borderRadius: 5,
  width: '80%',
  padding: 10,
  marginBottom: 15,
}
})