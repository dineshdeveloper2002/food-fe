import { useContext, createContext, ReactNode } from "react";
import { Home } from "../pages/chatpage";


interface contextdata {
    value: number;
    theme: string
}
export const Authcontext = createContext<contextdata | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
    value: number;
    theme: string;
}


export const Authuser = ({ children, value, theme }: AuthProviderProps) => {
    return (
        <Authcontext.Provider value={{ value, theme }}>
            {children}
        </Authcontext.Provider>
    )
}







