import "../styles/Expense.css";
import DeleteIcon from "../svgs/DeleteIcon.jsx";
import EditIcon from "../svgs/EditIcon.jsx";
import Button from "./Button.jsx";
import deleteExpense from "../services/deleteExpense.js";
import ExpArrayContext from "../context/ExpArrayContext";
import { useContext } from "react";
import UpdateContext from "../context/UpdateContext.jsx";
import ExpenseObjContext from "../context/ExpenseObjContext";

function Expense({data}){
    const {expArray, setExpArray, ExpArrayHadler} = useContext(ExpArrayContext);
    const {update, objId, setUpdate, setObjId} = useContext(UpdateContext);
    const {expenseObj, setExpenseObj, ExpenseObjectHandeler} = useContext(ExpenseObjContext);


    return (
        <div className="expense">
            <div className="expense-name-cat">
                <p className="expense-name">{data.expenseName}</p>
                <p className="expense-categary">{data.category}</p>
            </div>

            <p className="created-at">
                {new Date(data.date).toLocaleDateString("en-IN",{
                        day:"numeric",
                        month:"short"
                    })}
            </p>

            <p className= "amount">
                ₹{data.amount}
            </p>

            <div className="edit-delete">
                <Button clickHandler={()=>{
                    setObjId(data._id);
                    setExpenseObj(expArray.find(exp=>exp._id===data._id));
                    setUpdate(true);
                }} icon={<EditIcon />} color="white" type="button" ClassName="edit-expense" />
                <Button clickHandler={()=>{
                    deleteExpense(data._id,setExpArray);
                }} icon={<DeleteIcon />} color="none" type="button" ClassName="delete-expense" />
            </div>            
        </div>
    );
}

export default Expense;