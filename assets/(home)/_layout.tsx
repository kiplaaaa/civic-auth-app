import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { UserProvider } from '@/context/context'
import { Ionicons } from '@expo/vector-icons'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

function CustomDrawerContent( props: any) {
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
             label = " logout"
             onPress ={ ()=> alert('logout')}   
             icon={({color, size})=>(
                <Ionicons name='log-out-outline' color={color} size={size} />   
             )}         
            />
            <DrawerItem
             label = " Settings"
             onPress ={ ()=> props.navigation.navigate('settings')}   
             icon={({color, size})=>(
                <Ionicons name='settings-outline' color={color} size={size} />   
             )}
             />
        </DrawerContentScrollView>
    )
}
export default function HomeLayout(){
    return (
        <GestureHandlerRootView>
            <UserProvider>
                <Drawer
                 drawerContent={(props) => <CustomDrawerContent {...props} />}
                 screenOptions={
                    {
                        headerStyle:{ backgroundColor: 'blue' },
                        headerTintColor: '#fff',
                        headerTitleStyle: { fontWeight: 'bold' },
                        drawerActiveBackgroundColor: '#bb86fc',
                        drawerActiveTintColor: 'black',
                        drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' },
                        drawerStyle: { backgroundColor: 'white' },
                        drawerPosition: 'right',
                    }
                 }>
                    <Drawer.Screen name='explore' options={{
                        title: 'Home',
                        drawerIcon: ({color, size})=> (
                            <Ionicons name='home-outline' color={color} size={size} />
                        )
                    }} />
                    <Drawer.Screen name='feed' />
                </Drawer>
            </UserProvider>
        </GestureHandlerRootView>            
    )
}