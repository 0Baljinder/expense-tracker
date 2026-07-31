import Button from "./Button";
import "../styles/ExpForm.css";
import CloseIcon from "../svgs/CloseIcon";
import { useContext,useEffect } from "react";
import ExpFormContext from "../context/ExpFormContext";
import ExpenseObjContext from "../context/ExpenseObjContext";
import ExpArrayContext from "../context/ExpArrayContext";
import UpdateContext from "../context/UpdateContext";
import updateExpense from "../services/updateExpense";

function UpdateForm(){
    const {update, objId, setUpdate, setObjId} = useContext(UpdateContext);
    const {expArray, setExpArray, ExpArrayHadler} = useContext(ExpArrayContext);
    const {expenseObj, setExpenseObj, ExpenseObjectHandeler} = useContext(ExpenseObjContext);

    return (
        <div className="model">
            <form onSubmit={(e)=>{
                e.preventDefault();
                updateExpense(objId,expenseObj,setExpArray);
                setUpdate(false);
            }}>
                <h2>Update Expense</h2>
            <input value={expenseObj.expenseName} type="text" placeholder="Expense name" required name="expenseName" onChange={ExpenseObjectHandeler} />
            <input value={expenseObj.amount} type="number" placeholder="Amount" required min={0} name="amount" onChange={ExpenseObjectHandeler} />
            <input value={new Date(expenseObj.date).toISOString().split("T")[0]} type="date" placeholder="Expense" required name="date" onChange={ExpenseObjectHandeler} />
            <select value={expenseObj.category} name="category" id="category" onChange={ExpenseObjectHandeler}>
                <option value="--select--" disabled>--select a category--</option>
                <option value="food&dining">Food & Dining</option>
                <option value="transportation">Transportation</option>
                <option value="shopping">Shopping</option>
                <option value="Bills&Utilities">Bills & Utilities</option>
                <option value="Housing/Rent">Housing/Rent</option>
                <option value="health&medical">Health & Medical</option>
                <option value="education">Education</option>
                <option value="entertainment">Entertainment</option>
                <option value="travel">Travel</option>
                <option value="personal-care">Personal Care</option>
                <option value="family">Family</option>
                <option value="salery/investment">Salery/Investment</option>
                <option value="emi/loans">EMI/Loans</option>
                <option value="other">Other</option>
                </select>
                <label htmlFor="description"><span>Description <span className="optional"> (Optional)</span></span>
                    <textarea name="description" id="description" onChange={ExpenseObjectHandeler}></textarea>
                </label>
            <Button clickHandler={()=>{
                setUpdate(false);
            }} type="button" icon={<CloseIcon />}  ClassName="close-exp-form" />
            <Button type="submit" icon="Add Expense" ClassName="submit-exp-form" />
        </form>
        </div>
    );
}

export default UpdateForm;