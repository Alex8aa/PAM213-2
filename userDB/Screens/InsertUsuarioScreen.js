import { useEffect, useState, useCallback } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, FlatList,
  StyleSheet, Alert, ActivityIndicator, Platform
} from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

import { StatusBar } from 'react-native';

const controller = new UsuarioController();

export default function UsuarioView() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);

  // SELECT - Cargar usuarios desde la BD
  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      console.log(`${data.length} usuarios cargados`);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Inicializar y cargar datos
  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };

    init();
    // avisar los cambios automáticos
    controller.addListener(cargarUsuarios);

    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  // INSERT - Agregar nuevo usuario
  const handleAgregar = async () => {
    if (guardando) return;
    try {
      setGuardando(true);
      const usuarioCreado = await controller.crearUsuario(nombre);
      Alert.alert('Usuario Creado', `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`);
      setNombre('');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setGuardando(false);
    }
  };

  // Renderizar cada usuario
  const renderUsuario = ({ item, index }) => (
    <View style={styles.userItem}>
      <View style={styles.userNumber}>
        <Text style={styles.userNumberText}>{index + 1}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>
        <Text style={styles.userId}>ID: {item.id}</Text>
        <Text style={styles.userDate}>
          {new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuarios</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre del usuario"
        value={nombre}
        onChangeText={setNombre}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAgregar}
        disabled={guardando}
      >
        <Text style={styles.buttonText}>
          {guardando ? 'Guardando...' : 'Agregar Usuario'}
        </Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderUsuario}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 16,
  paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight + 70 : 70,
  backgroundColor: '#fff'
},
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  userItem: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  userNumber: {
    width: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userNumberText: {
    fontWeight: 'bold'
  },
  userInfo: {
    flex: 1,
    paddingLeft: 8
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  userId: {
    fontSize: 14,
    color: '#555'
  },
  userDate: {
    fontSize: 12,
    color: '#999'
  }
});