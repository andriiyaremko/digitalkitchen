import create from 'zustand';
import {User} from "../Api/UserApi";


interface UserStore {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
}));