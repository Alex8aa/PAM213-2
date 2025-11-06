import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

export default function ImagenScreen() {
const [Contador,setContador]=useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto}> MI GALERIA </Text>
        

    <View style={styles.botonesContainer} >
        
    <Button color= "blue" title='Imagen 1' onPress={()=>setContador(Contador)}/>
    <Button color= "blue" title='Imagen 2' onPress={()=>setContador(Contador)}/>
    <Button color= "blue" title='Imagen 3' onPress={()=>setContador(Contador)}/>
    <Button color= "blue" title='Imagen 4' onPress={()=>setContador(Contador)}/>
    <Button color= "blue" title='Imagen 5' onPress={()=>setContador(Contador)}/>
    <Button color= "blue" title='Imagen 6' onPress={()=>setContador(Contador)}/>
    

</View>

      <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b4a6aff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
texto:{ 
  color: '#000000ff', 
  fontSize: 30, 
  fontFamily: 'Times New Roman',
  fontWeight: "Bold",
  fontStyle: 'italic',
  

},

botonesContainer:{
  marginT: 15,
  alignItems: 'center',
  justifyContent: 'center',
  gap:10, 
},

});