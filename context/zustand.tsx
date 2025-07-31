import {} getItem, setItem, deleteItemAsync } from 'expo-secure-store';
import React from "react";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
type User = {
    user: string;
} | null;

type UserState = {
    loading: boolean;
    login: ()=>void;
    logOut: ()=>void;
};

export const userStoreData = create
    (persist<UserState>((set)=>{
        loading: false,
        login: ()=>{
            set((state)=>{
                return{
                    ...state, 
                    loading: true,
                }
            })
        }
         logOut: ()=>{
            set((state)=>{
                return{
                    ...state,
                    loading: false,
                }
            })
        }        
    }),
    {
        name: 'storage Key',
        storage: {()=> {
            return {
                getItem,
                setItem,
                removeItem: deleteItemAsync,
                }
            };
        }}
    }
)
