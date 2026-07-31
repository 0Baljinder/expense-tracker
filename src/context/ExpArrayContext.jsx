import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import ExpenseObjContext from "./ExpenseObjContext";
import ExpFormContext from "./ExpFormContext";
import createExpense from "../services/createExpense";

const ExpArrayContext = createContext();

export function ExpArrayProvider({children}){
    const [expArray, setExpArray] = useState([]);
        const {expenseObj, setExpenseObj, ExpenseObjectHandeler} = useContext(ExpenseObjContext);
        const {expForm, setExpForm} = useContext(ExpFormContext);

    function ExpArrayHadler(e){
        try{
            e.preventDefault();
            console.log(expenseObj);
            if(expenseObj.expenseName.trim === "")return;
            if(expenseObj.amount.trim === "" || expenseObj.amount < 0)return;
            if(expenseObj.date.trim === "")return;
            if(expenseObj.category.trim === "")return;
            createExpense(expenseObj,setExpArray);
            setExpenseObj({
            expenseName:"",
            amount:"",
            date:"",
            category:"",
            description:""
        });
        }
        catch(er){
            console.log(er);
        }
        finally{
            setExpForm(false);
        }
    }

    return (
        <ExpArrayContext.Provider value={{expArray, setExpArray, ExpArrayHadler}}>
            {children}
        </ExpArrayContext.Provider>
    );
}

export default ExpArrayContext;