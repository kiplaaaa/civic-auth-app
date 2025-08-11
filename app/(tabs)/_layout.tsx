import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
export default function TabLayout() {

  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Protected guard={true}>
       <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      /> 
      </Tabs.Protected>
      <Tabs.Protected guard = {true}>
        <Tabs.Screen
          name="modal"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color, size })=>(
              <Ionicons name='home' color={color} size={size}/>
            )
        }}
        />
      </Tabs.Protected> 
      <Tabs.Screen
       name='BingoBoard'
       options={{
        title: ' Bingo Board',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='grid-outline' color={color} size={size} />
        )        
       }}/> 

      <Tabs.Screen
       name='squaresBingoBoard'
       options={{
        href: null
       }}
       
       />
    </Tabs>
  );
}