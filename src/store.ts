import create from 'zustand';
import { persist } from 'zustand/middleware';
import { statusT, userData } from './store.types';
type StoreTokenState = {
    userData:userData;
    setUser: (user?: userData) => void;
    wipeUser: () => void;
};


export const useStore = create<StoreTokenState>()(
  persist(
    (set) => ({
    userData: {
      username: undefined,
      mail: undefined,
      state: undefined,
      id: undefined,
      creationDate: undefined
    },
    setUser: (user?: userData) => {
      set({
        userData: user
      });
      },
      wipeUser: () => {
        set({
          userData: {
            username: undefined,
            mail: undefined,
            state: undefined,
            id: undefined,
            creationDate: undefined
          }
        })
      },
    }), 
    { name: 'user-store-private' }
  )
  );

export default useStore;
