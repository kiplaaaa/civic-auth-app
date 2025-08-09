import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { UserProvider } from '@/context/context'
import { Ionicons } from '@expo/vector-icons'
export default function HomeLayout(){
    return (
        <GestureHandlerRootView>
            <UserProvider>
                <Drawer
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