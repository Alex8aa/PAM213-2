import React, { useState } from 'react';
import { View,Text,TextInput,Switch,Button,Alert,Platform,ImageBackground,StyleSheet,TouchableOpacity} from 'react-native';

export default function RegistroUsuario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const MAIN_IMAGE= require ('../assets/Recursos/Imagen_repaso.png');

  

  const MostrarAlerta = () => {
    
    if (nombre.trim() === '' || correo.trim() === '') {
      if (Platform.OS === 'web') {
        alert('Error: Por favor completa todos los campos.');
      } else {
        Alert.alert(
          'Error',
          'Por favor completa todos los campos.',
          [{ text: 'OK' }]
        );
      }
      return;
    }

    
    if (!aceptaTerminos) {
      if (Platform.OS === 'web') {
        alert('Debes aceptar los términos y condiciones.');
      } else {
        Alert.alert(
          'Términos no aceptados',
          'Debes aceptar los términos y condiciones.',
          [{ text: 'OK' }]
        );
      }
      return;
    }

    
    if (Platform.OS === 'web') {
      alert(`Registro exitoso\n\nNombre: ${nombre}\nEmail: ${correo}`);
    } else {
      Alert.alert(
        'Registro exitoso',
        `Nombre: ${nombre}\nEmail: ${correo}`,
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <ImageBackground
      source={{MAIN_IMAGE}}
      style={styles.fondo}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Registro de Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          placeholderTextColor="#ccc"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#ccc"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />

        <View style={styles.switchContainer}>
          <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
            thumbColor={aceptaTerminos ? '#00c853' : '#ccc'}
          />
          <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
        </View>

        <TouchableOpacity style={styles.boton} onPress={MostrarAlerta}>
          <Text style={styles.textoBoton}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    borderRadius: 20,
    margin: 20
  },
  titulo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  switchText: {
    color: '#fff',
    marginLeft: 10
  },
  boton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
