import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';
import { UserContext } from '@/context/context';
import { useContext } from 'react';
import * as SplashScreen from 'expo-splash-screen';
export default function Feed() {
    const { user, setUser, logOut, loading} = useContext(UserContext);

    // const handleLogin = () =>{
    //     setUser({ name: 'giddy'})
        
    // }

    // const handleLogOut = () =>{
    //     setUser(null)
    // }
    
    if ( loading ) return <Text>Loading</Text>

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
            <Text>
                Feed
            </Text>
            <Link href='/(tabs)' className='bg-color: blue'>Back</Link>
            <>
                {
                user ? 
                // if the user has a string
                    (<>
                        <Text>Welcome {user.name}</Text>
                        <Button title='Logout' onPress={logOut}/>
                    </>) :
                    // if the user is null
                    (<>
                        <Text>You are logged Out</Text>
                        <Button title='Login' onPress={()=>setUser({name: 'hi'})}/>
                    </>)
                }
            </>
        </View>
    )
}