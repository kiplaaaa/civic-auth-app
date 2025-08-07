import { getItem, setItem, deleteItemAsync } from 'expo-secure-store';
import React from "react";
import { create } from 'zustand';
import { createJSONStorage, persist } from "zustand/middleware";

type User = {
    user: string;
} | null;

type UserState = {
    user: User,
    loading: boolean;
    login: ()=>void;
    logOut: ()=>void;
};

export const userStoredData = create(
    persist<UserState>(
        (set)=>{
            user: User,
            loading: false,
            login: ()=>{
                set((state)=>{
                    return{
                        ...state,
                        loading: true,
                    }
                });
            },
            logOut: ()=>{
                set((state)=>{
                    return{
                        ...state,
                        loading: false,
                    }
                })
            },
       }
    ),
    {
        name: 'Authorize',
        storage: createJSONStorage(=>({
            getItem,
            setItem, 
            deleteItemAsync,
        }))
    }      
)