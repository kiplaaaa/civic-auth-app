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
    const setUser = (user: User) => {
        setUserState(user);
        AsyncStorage.setItem('user', JSON.stringify(user));
    };

    const logOut = () => {
        setUserState(null);
        AsyncStorage.removeItem('user');
    };
    const loading = user === null;
    // This could be used to check if the user is logged in or not

    // and to load the user data from AsyncStorage when the app starts.
    // AsyncStorage.getItem('user').then((storedUser) => {      
    //     if (storedUser) {
    //         setUserState(JSON.parse(storedUser));
    return(
        <UserContext.Provider value={{ user, setUser, logOut, loading } }>
            {children}
        </UserContext.Provider>
    )
}