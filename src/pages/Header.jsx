import "../styles/Header.css";
import WalletSVG from "../svgs/WalletSVG";
import ExpArrayContext from "../context/ExpArrayContext";
import { useContext, useEffect } from "react";
import SetecterContext from "../context/SelecterContext";


function Header(){
    const {expArray, setExpArray, ExpArrayHadler} = useContext(ExpArrayContext);
        const {sort, month, year,selectedYear ,setSort, setMonth, setYear, setSelectedYear} = useContext(SetecterContext);


    let total = 0;
     expArray.map(o=>{
         total+=o.amount;
     })

    return (
        <header>
            <div className="content">
                <p>Total Expense</p>
                <div className="monthly-expense">
                    ₹{total}
                </div>
                {(month!=="all")&&<p>This Month</p>}
                {(month==="all")&&<p>This Year</p>}
            </div>
            <WalletSVG />
        </header>
    )
};

export default Header;