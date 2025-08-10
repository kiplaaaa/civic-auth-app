import { Tabs } from 'expo-router';
import React from 'react';

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
        }}
        />
      </Tabs.Protected>  
    </Tabs>
  );
}