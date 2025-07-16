import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Alert , Button} from "react-native";
import { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { Link } from 'expo-router';

export default function App(){
  const [ data, setData ] = useState(new Date());

  useEffect(() =>{
    const interval = setInterval(() =>{
      setData(new Date());
    }, 1000);    
    return () => clearInterval(interval);
  })
  const hours = data.getHours();
  const minutes = data.getMinutes();
  const seconds = data.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour, plus 0.5 degrees per minute  
  const minuteDeg = minutes * 6 + seconds * 0.1;  // 60 minutes in an hour, so each minute is 6 degrees
  const secondDeg = seconds * 6; //60 seconds in a minute, so each second is 6 degrees  

  const numbers = Array.from({length: 12}, (_, i) => i + 1 );
  const radius = 120;
  const center = 150;

  //alert modal

  const handleAler = () =>{
    Alert.alert('Hello');
  }
  
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar  />
      <View style={styles.clockface}>
        { numbers.map( (num, key )=>{
          const angle = (key - 2) * (Math.PI / 6);
          const x = center + radius * Math.cos(angle) - 15;
          const y = center + radius * Math.sin(angle) - 15;
          return (
            <Text
              key={key}
              style={[
                { position: 'absolute'},
                { left: x, top: y }
              ]}
            >
              {num}
            </Text>
          );
        })} 
        <View style={[styles.hand, styles.hour, { transform: [{ rotate: `${hourDeg}deg`}]}]}  />    
        <View style={[styles.hand, styles.minute , { transform: [{rotate: `${minuteDeg}deg`}]}]}/>  
        <View style={[styles.hand, styles.second, { transform: [{ rotate: `${secondDeg}deg`}]}]}/>   
      </View>
      <Link href="/home/feed" style={{ marginTop: 20, color: 'blue' }}>
        Go to Feed  
      </Link>

      <Link href='/modal'>Open Modal</Link>
      <Button title="Confirm" onPress={handleAler}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  clockface: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: '#000',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hand: {
    position: 'absolute',
    backgroundColor: '#000',
    bottom: 150,
    left: 147.5, // Center the hand
    transformOrigin: 'bottom center', 
  },
  hour:{
    width: 5,
    height: 60,
    backgroundColor: 'darkblue',
  },
  minute:{
    width: 4,
    height: 80,
    backgroundColor: 'red',
  },
  second:{
    width: 3,
    height: 100,
    backgroundColor: 'green',
  },
})