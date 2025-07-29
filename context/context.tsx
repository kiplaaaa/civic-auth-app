import React, { PropsWithChildren, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState } from "react";
import *as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

type User = {
    name: string
} | null;

type userState={
    user: User;
    setUser: (user: User)=>void;
    logOut: ()=>void;
    loading: boolean;
}

export const UserContext = createContext<userState>({
    user: null,
    setUser: ()=>{},
    logOut: ()=>{},
    loading: true,
});


export const UserProvider = ({ children }: PropsWithChildren) =>{
    const [ user, setUserState ] = useState<User | null>(null);
    const [ loading, setLoading ] = useState(true);


    // load user from asyncStorage on startup
    useEffect(()=>{
        const loadUser = async()=>{
            try{
                const storedUser = await AsyncStorage.getItem('user');
                if(storedUser){
                    setUserState(JSON.parse(storedUser))
                }
            }
            catch(e){
                console.error('error', e)
            }
            finally{
                setLoading(false);
            }
        }
        loadUser()
    }, [])

    useEffect(()=>{
        if(!loading){
            SplashScreen.hideAsync();
        }
    }, [loading]);

    const setUser = (Newuser: User) => {
        AsyncStorage.setItem('user', JSON.stringify(Newuser));
        setUserState(Newuser)
    };

    const logOut = () => {
        setUserState(null);
        AsyncStorage.removeItem('user');
    };
    return(
        <UserContext.Provider value={{ user, setUser, logOut, loading } }>
            {children}
        </UserContext.Provider>
    )
}