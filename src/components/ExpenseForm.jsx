import Button from "./Button";
import "../styles/ExpForm.css";
import CloseIcon from "../svgs/CloseIcon";
import { useContext } from "react";
import ExpFormContext from "../context/ExpFormContext";
import ExpenseObjContext from "../context/ExpenseObjContext";
import ExpArrayContext from "../context/ExpArrayContext";


function ExpenseForm({clickHandler, type, icon}){
    const {expForm, setExpForm} = useContext(ExpFormContext);
    const {expenseObj, setExpenseObj, ExpenseObjectHandeler} = useContext(ExpenseObjContext);
    const {expArray, setExpArray, ExpArrayHadler} = useContext(ExpArrayContext);

    return (
        <div className="model">
        <form onSubmit={ExpArrayHadler}>
            <h2>Add Expense</h2>
            <input type="text" placeholder="Expense name" required name="expenseName" onChange={ExpenseObjectHandeler} />
            <input type="number" placeholder="Amount" required min={0} name="amount" onChange={ExpenseObjectHandeler} />
            <input type="datetime-local" placeholder="Expense" required name="date" onChange={ExpenseObjectHandeler} />
            <select name="category" id="category" defaultValue="--select--" onChange={ExpenseObjectHandeler}>
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
                setExpForm(false);
            }} type="button" icon={<CloseIcon />}  ClassName="close-exp-form" />
            <Button clickHandler={clickHandler} type="submit" icon="Add Expense" ClassName="submit-exp-form" />
        </form>
        </div>
    )
};

export default ExpenseForm;