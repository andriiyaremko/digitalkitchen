import create from 'zustand';
import { User } from '../Api/UserApi';
import { persist, PersistOptions } from 'zustand/middleware';

interface UserStore {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const persistOptions: PersistOptions<UserStore> = {
    name: "currentUser",
};

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            login: (user) => set({ user }),
            logout: () => set({ user: null }),
        }),
        persistOptions
    )
);

