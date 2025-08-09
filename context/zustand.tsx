import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store';
import React from "react";
import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";

type User = {
    user: string;
} | null;

type UserState = {
    user: User,
    loading: boolean;
    login: ()=>void;
    logOut: ()=>void;
};

export const userStoredData = create<UserState>()(
    persist(
        (set)=>({
            user: null,
            loading: false,
            login: () => set({
                user: { user: 'giddy' },
                loading: false,
            }),
            logOut: ()=>set({
                user: null,
                loading: false,
            }),
        }),
        {   
            name: 'user-storage',
            storage: createJSONStorage(() => ({
                getItem:(key)=> getItemAsync(key),
                setItem:(key, value)=> setItemAsync(key, value),
                removeItem:(key)=> deleteItemAsync(key),
            })),
        }
    )
);