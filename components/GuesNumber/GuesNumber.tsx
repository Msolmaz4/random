import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
type GuesNumberProps = {
    roundNumber: number; 
    guesNumber: number; 
    item?: any; // item isteğe bağlı, türü belirtilebilir
  };

export default function GuesNumber({roundNumber,guesNumber,item}:GuesNumberProps) {
  return (
    <View style={styles.container}>
      <Text>{roundNumber}</Text>
      <Text>{guesNumber}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        backgroundColor:'#fff',
        borderRadius:5,
        margin:5,
        borderWidth:1,
        borderColor:'#ccc'

    }
})