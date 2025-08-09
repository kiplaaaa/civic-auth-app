import { Stack } from 'expo-router';
import React from 'react';

// export const unstableSettings{
//   initialRouteName: ''
// }
export default function TabLayout() {

  return (
    <Stack 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Protected guard={true}>
       <Stack.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      /> 
      </Stack.Protected>
      {/* <Stack.Protected guard = {true}>
        <Stack.Screen
          name="modal"
          options={{
            title: 'Explore',
            presentation: 'transparentModal',
        }}
        />
      </Stack.Protected>       */}
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