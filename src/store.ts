import { persist } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';
import { User } from './models/user.model';

type StoreTokenState = {
    userData: User | null;
    session_id: string | null;
    setUser: (newUserData: User) => void;
    setSession: (session_id: string, expirasAt: string)=> void,
    expiresAt: string | null;
};

export const useSession = createStore<StoreTokenState>()(
    persist(
    (set) => ({
        userData: null,
        session_id: null,
        setUser: (newUserData: User) => {
            set({
                userData: newUserData,
            });
        },
        expiresAt: null,
        setSession: (session_id: string, expiresAt: string) =>{
            set({ 
                session_id: session_id, 
                expiresAt: expiresAt 
            });
        }}), 
        { name: 'USER-store' }
    )
);

export default useSession;
