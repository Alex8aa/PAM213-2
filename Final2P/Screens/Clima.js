import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  ImageBackground, 
  TouchableOpacity, 
  Alert 
} from 'react-native';
const fondo= require('../assets/Recursos/ej1.png')

const images = [
  {
    id: 1,
    title: "Ciudad de Mexico",
    //temp: "17 °C",
    desc: "Nublado: 17°C ",
    details: "Ciudad de Mexico: El clima se encuentra particularmente frio, el cielo nublado y con probabilidad de lluvia",
    img: require('../assets/Recursos/ft1.png'),
  },

  {
    id: 2,
    title: "Ciudad de Queretaro",
    //temp: "22°C",
    desc: "Soleado: 22°C",
    details: "Ciudad de Queretaro: El clima esta caluroso con toques soleados",
    img: require('../assets/Recursos/ft2.png'),
  },

  {
    id: 3,
    title: "Ciudad Marques",
    //temp: "14 °C",
    desc: "Frio : 14°C",
    details: "Ciudad Marques:  El clima se encuentra casi helado ",
    img: require('../assets/Recursos/ft3.png'),
  },

  {
    id: 4,
    title: "Ciudad Costera",
    //temp:"29 °C",
    desc: "Caluroso:  29° C",
    details: "Ciudad Costera:  El clima de ciudad costera está casi veraniego",
    img: require('../assets/Recursos/ft4.png'),
  },
  
];

export default function Clima() {

  const showDetails = (title, details) => {
    Alert.alert(
      title,
      details,
      [{ text: "Cerrar" }]
    );

  };

  return (

     <ImageBackground
        source={fondo}
          style={styles.background}
    
        >
    
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>Clima Actual       19:25 hrs</Text>

      {images.map((item) => (
        <View key={item.id} style={styles.card}>

          <ImageBackground 
            source={item.img} 
            style={styles.image}
            imageStyle={{ borderRadius: 10 }}
          />

          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => showDetails(item.title, item.details)}
          >
            <Text style={styles.buttonText}>Ver detalles</Text>
          </TouchableOpacity>
        </View>
      ))}

    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  card: {
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    elevation: 3,
  },
  image: {
    height: 180,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  desc: {
    fontSize: 14,
    marginVertical: 5
  },
  button: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
