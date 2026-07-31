import { createContext, useState } from "react";

const GetExpMessageContext = createContext();

export function GetExpMessageProvider({children}){
    const [getExp, setGetExp] = useState(false);

    return (
        <GetExpMessageContext.Provider value={{getExp, setGetExp}}>
            {children}
        </GetExpMessageContext.Provider>
    );
}

export default GetExpMessageContext;