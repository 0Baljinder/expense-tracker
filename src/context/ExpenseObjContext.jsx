import { createContext, useState, useContext } from "react";
import createExpense from "../services/createExpense";
import ExpFormContext from "./ExpFormContext";

const ExpenseObjContext = createContext();

export function ExpenseObjProvider({children}){
    const [expenseObj, setExpenseObj] = useState({
        expenseName:"",
        amount:"",
        date:"",
        category:"",
        description:""
    });
    const {expForm, setExpForm} = useContext(ExpFormContext);


    function ExpenseObjectHandeler(e){
        setExpenseObj(prev=>{return{
            ...prev, [e.target.name]:e.target.value
        }});
    }

    return (
        <ExpenseObjContext.Provider value={{expenseObj, setExpenseObj, ExpenseObjectHandeler}}>
            {children}
        </ExpenseObjContext.Provider>
    );
}

export default ExpenseObjContext;