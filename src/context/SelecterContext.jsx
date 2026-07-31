import { createContext, useState, useContext, Children } from "react";
import YearContext from "./YearsContext";

const SetecterContext = createContext();

export function SelecterProvider({children}){
    const [sort, setSort] = useState("newest");
    const today = new Date();
    const [month, setMonth] = useState(`${today.getMonth()}`);
    const [year, setYear] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);

    return (
        <SetecterContext.Provider value={{sort, month, year,selectedYear ,setSort, setMonth, setYear, setSelectedYear}}>
            {children}
        </SetecterContext.Provider>
    );
}

export default SetecterContext;