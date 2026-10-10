import { createContext, useState } from "react";

const Loadingcontext = createContext();

export function LoadingcontextProvider({children}){
    const [loading, setLoading] = useState(false);

    return (
        <Loadingcontext.Provider value={{loading, setLoading}}>
            {children}
        </Loadingcontext.Provider>
    )
};

export default Loadingcontext;