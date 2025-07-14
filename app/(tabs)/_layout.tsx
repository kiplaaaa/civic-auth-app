import { Stack } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {

  return (
    <Stack // protected routes in Stack/stack/drawer
      screenOptions={{
        headerShown: false,

      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
    
        }}
      />
      <Stack.Screen
        name="explore"
        options={{
          title: 'Explore',
        }}
      />
    </Stack>
  );
}

// import React from "react";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { Drawer } from "expo-router/drawer";

// export default function TabLayout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white' }}>
//       <Drawer>
//         <Drawer.Screen name="index" />
//         <Drawer.Screen name="explore" />
//       </Drawer>
//     </GestureHandlerRootView>
//   );
// }