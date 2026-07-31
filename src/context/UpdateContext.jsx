import { createContext,useState } from "react";

const UpdateContext = createContext();

export function UpdateContextProvider({children}){
    const [update, setUpdate] = useState(false);
    const [objId, setObjId] = useState("");

    return(
        <UpdateContext.Provider value={{update, objId, setUpdate, setObjId}}>
            {children}
        </UpdateContext.Provider>
    );
}

export default UpdateContext;