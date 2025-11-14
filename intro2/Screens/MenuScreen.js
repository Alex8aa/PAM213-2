import { Text, StyleSheet, View, Button} from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen.js'
import BotonesScreen from './BotonesScreen.js'
import ActScreen from './ActScreen.js'
import FlatlistScreen from './FlatlistScreen.js'
import ImageScreen from './ImageScreen.js'
import ModalScreen from './ModalScreen.js'
import ScrollScreen from './ScrollScreen.js'
import BottomScreen from './BottomScreen.js'
import TextScreen from './TextScreen.js'
import RepasoScreen from './RepasoScreen.js'



export default function MenuScreen()  {

const[screen, setScreen]= useState('menu');

switch(screen){
    case 'contador':
        return <ContadorScreen/>

        case 'botones':
            return <BotonesScreen/>

            case 'text':
            return <TextScreen/>

               case 'image':
            return <ImageScreen/>

               case 'bottom':
            return <BottomScreen/>

               case 'scroll':
            return <ScrollScreen/>

               case 'act':
            return <ActScreen/>

               case 'flatlist':
            return <FlatlistScreen/>

               case 'modal':
            return <ModalScreen/>

               case 'repaso':
            return <RepasoScreen/>

            case 'menu':

                default:
                    
}

    return (
      <View style={styles.boton}>
        <Text>Menu de Practicas</Text>
        <Button title= 'Pract:Contador'color='red' onPress={()=>setScreen('contador')}/>
        <Button title= 'Pract:Buttons' color='blue' onPress={()=>setScreen('botones')}/>
        <Button title= 'Pract: Text' color='green' onPress={()=>setScreen('text')}/>
        <Button title= 'Pract:Image Back' color='orange' onPress={()=>setScreen('image')}/>
        <Button title= 'Pract:BottomSheet' color='purple' onPress={()=>setScreen('bottom')}/>
        <Button title= 'Pract:Scroll' color='brown' onPress={()=>setScreen('scroll')}/>
        <Button title= 'Pract: Act Indicator' color='black' onPress={()=>setScreen('act')}/>
        <Button title= 'Pract:FlatList'color='orange' onPress={()=>setScreen('flatlist')}/>
        <Button title= 'Pract:Modal' color='grey' onPress={()=>setScreen('modal')}/>
         <Button title= 'Repaso' color='red' onPress={()=>setScreen('repaso')}/>
                                
      </View>
    )
  
}

const styles = StyleSheet.create({
   boton:{
      marginT: 15,
flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  gap:8,
      
      
   }
})