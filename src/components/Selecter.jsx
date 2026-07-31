import { useContext } from "react";
import "../styles/Selecter.css";
import SetecterContext from "../context/SelecterContext";

function Selecter(){
    const {sort, month, year,selectedYear ,setSort, setMonth, setYear, setSelectedYear} = useContext(SetecterContext);

    return(
        <div className="selecter">
            <label htmlFor="sort">
                <select value={sort} name="sort" id="sort"  onChange={(e)=>{
                    setSort(e.target.value);
                    
                }}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="highest">Highest</option>
                    <option value="lowest">Lowest</option>
                </select>
            </label>

            <label htmlFor="filter">
                <select value={month} name="month" id="filter" onChange={(e)=>{
                    setMonth(e.target.value);
                }}>
                    <option value="all">All Months</option>
                    <option value="0">Jan</option>
                    <option value="1">Feb</option>
                    <option value="2">Mar</option>
                    <option value="3">Apr</option>
                    <option value="4">May</option>
                    <option value="5">Jun</option>
                    <option value="6">Jul</option>
                    <option value="7">Aug</option>
                    <option value="8">Sep</option>
                    <option value="9">Out</option>
                    <option value="10">Nov</option>
                    <option value="11">Dec</option>
                </select>
            </label>

            <label htmlFor="year">
                <select value={selectedYear?selectedYear:""} name="year" id="year" onChange={(e)=>{
                    setSelectedYear(e.target.value);
                }}>
                    {year.map(y=>
                        <option key={y._id} value={y._id}>{y._id}</option>
                    )}
                </select>
            </label>
        </div>
    );
}

export default Selecter;