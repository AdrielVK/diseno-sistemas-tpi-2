import {create} from "zustand"

export interface User {
    name:string,
    role: string
}

export enum ROLE { "ATENCION" , "MECANICO"}

export interface AuthState {
    user: User | null
}

export type AuthActions = {
    login: (name:string, role:string) => void;
    logout: () => void;
}

export type AuthStore = AuthState & AuthActions;

export const InitialState: AuthState = {
    user:null
}

export const useAuthStore = create<AuthStore>((set) => ({
    ...InitialState,
    logout: () => {
        set({user:null})
    },

    login:(name:string, role:string) => {
        set({
            user:{name:name, role:role}
        })
    }
}))