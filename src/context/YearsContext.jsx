import { createContext, useState, useContext } from "react";
import ExpArrayContext from "./ExpArrayContext";

const YearContext = createContext();

export function YearProvider({children}){
    const {expArray, setExpArray, ExpArrayHadler} = useContext(ExpArrayContext);
    const years = [...new Set(expArray.map(exp=>
        new Date(exp.date).getFullYear()))].sort((a,b)=>b-a);

    return (
        <YearContext.Provider value={{years}}>
            {children}
        </YearContext.Provider>
    );
}

export default YearContext;