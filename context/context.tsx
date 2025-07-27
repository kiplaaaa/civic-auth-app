import React, { PropsWithChildren } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState } from "react";

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
    
    const setUser = async(user: ) =>{
        try{
            const jsonValue = JSON.stringify(user);
            await AsyncStorage.setItem('Key', jsonValue)
            setUserState(user);
        }
        catch(e){
            console.error('Error Saving', e)
        }
    }
    useEffect(()=>{

    })

    return(
        <UserContext.Provider value={{ user, setUser} }>
            {children}
        </UserContext.Provider>
    )
}