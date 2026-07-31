import { createContext } from "react";
import { useState } from "react";

const ExpFormContext = createContext();

export function ExpFormProvider({children}){
    const [expForm, setExpForm] = useState(false);
    return (
        <ExpFormContext.Provider value={{expForm, setExpForm}} >
            {children}
        </ExpFormContext.Provider>
    )

}

export default ExpFormContext;