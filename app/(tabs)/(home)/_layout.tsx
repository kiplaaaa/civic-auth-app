import { Drawer } from 'expo-router/drawer'
import { UserProvider } from '@/context/context'
export default function HomeLayout(){
    return (
        <UserProvider>
            <Drawer/>
        </UserProvider>        
    )
}