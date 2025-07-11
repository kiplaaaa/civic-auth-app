import React from "react";
import { Text, View, StyleSheet, _View } from "react-native";
import { useState, useEffect } from "react";

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

  const numbers = Array.from({length: 12}, (_, i) => i + 1 );
  const radius = 120;
  const center = 150;
  
  return(
    <View style={styles.container}>
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
        <View style={[styles.hand, styles.hour]} />    
        <View style={[styles.hand, styles.minute]}/>  
        <View style={[styles.hand, styles.second]}/>   
      </View>
    </View>
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
    transformOrigin: '50% 100%',
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