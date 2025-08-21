import React, { createContext, ReactNode, useState } from "react";

type MyContextType = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<MyContextType | null>(null);

type MyProviderProps = {
    children: ReactNode;
}

export const MyProvider = ({children} : MyProviderProps) =>{
    const [value, setValue] = useState("Hello!");

    return(
        <MyContext.Provider value={{value, setValue}}>
            {children}
        </MyContext.Provider>
    );
};