//1.-Imports: Zona de importaciones
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import MenuScreen from './Screens/MenuScreen';
//2.- Main: Zona de componentes
export default function App() {


  return (
    <GestureHandlerRootView style={{flex:1}}> 
    <MenuScreen></MenuScreen>
    </GestureHandlerRootView>

  );
}

//3.- Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});