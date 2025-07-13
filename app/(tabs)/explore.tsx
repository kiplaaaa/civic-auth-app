import React from "react";
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
    return(
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen name="index" />
                <Drawer.Screen name="explore" />
            </Drawer>
        </GestureHandlerRootView>
    )
}