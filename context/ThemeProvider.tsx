"use client"

import { createContext, useState } from "react"

interface ThemeProviderProps{
    children?:React.ReactNode
}
interface IThemeContext{
    theme:string,
    light:string,
    changeTheme:(themeColor:string)=>void;
    changeLight:(LightColor:string)=>void;
}
const ThemeContext=createContext<IThemeContext | null>(null);

export const ThemeProvider:React.FC<ThemeProviderProps>=({children})=>{
    const [theme,setTheme]=useState("blue");
    const [light,setLight]=useState("blue");
    const changeTheme=(ThemeColor:string)=>{
        setTheme(ThemeColor);
    }
    const changeLight=(LightColor:string)=>{
        setTheme(LightColor);
    }
    return (
        <ThemeContext.Provider value={{theme,light,changeLight,changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}