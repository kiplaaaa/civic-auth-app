import { getItem, setItem, deleteItemAsync } from 'expo-secure-store';
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
                loading: true
            }),
            logOut: ()=>set({
                user: null,
                loading: false
            }),
        }),
        {   
            name: 'user-storage',
            storage: createJSONStorage(() => ({
                getItem,
                setItem,
                removeItem: deleteItemAsync,
            })),
        }
    )
)