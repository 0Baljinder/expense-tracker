import Button from "../components/Button";
import AddIcon from "../svgs/AddIcon";
import ExpFormContext from "../context/ExpFormContext";
import { useContext, useEffect } from "react";
import "../styles/Home.css";
import Expense from "../components/Expense";
import ExpArrayContext from "../context/ExpArrayContext";
import getExpenses from "../services/getExpenses";
import NoExpFound from "../components/NoExpFound";
import GetExpMessageContext from "../context/GetExpMessage";
import UpdateForm from "../components/UpdateForm";
import UpdateContext from "../context/UpdateContext";
import Selecter from "../components/Selecter";
import SetecterContext from "../context/SelecterContext";
import getYears from "../services/getYears";

function Home(){
    const {sort, month, year,selectedYear ,setSort, setMonth, setYear, setSelectedYear} = useContext(SetecterContext);
    const {expForm, setExpForm} = useContext(ExpFormContext);
    const {expArray, setExpArray, ExpArrayHadler} = useContext(ExpArrayContext);
    const {getExp, setGetExp} = useContext(GetExpMessageContext);
    const {update, objId, setUpdate, setObjId} = useContext(UpdateContext);

    useEffect(()=>{
        const fetchYears = async()=>{
            getYears(setYear, setSelectedYear);
        };
        fetchYears();
    },[]);

    useEffect(()=>{
        if(!selectedYear)return;
        const fetchExpenses = async ()=>{
            getExpenses(setGetExp,setExpArray, expArray,sort, month, selectedYear);
        };
        fetchExpenses();
    },[sort,month,selectedYear]);

    return (
        <div className="home">
            <div className="button-filter">
            <Button clickHandler={()=>{
                setExpForm(true);
            }} icon={<AddIcon />} color="blue" type="button" ClassName="exp-button" />
            
            <Selecter />
            </div>

            {(expArray.length===0) && <NoExpFound />}

            {update && <UpdateForm />}
            <div className="exp-list">
            {
                expArray.map(obj=>{ return(
                    <Expense key={obj._id} data={obj} />
                )
                })
            }
            </div>
        </div>
    )
};

export default Home;