import { useContext } from "react";
import ExpArrayContext from "../context/ExpArrayContext";
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import statsTooltip from "../tooltips/statsTooltip";

function MonthlyExp(){
    const {expArray, setExpArray, ExpArrayHadler} = useContext(ExpArrayContext);
    const monthlyExp = Array(12).fill(0);
    expArray.forEach(exp=>{
        const month = new Date(exp.date).getMonth();
        monthlyExp[month]+=exp.amount;
    });
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const chartDate = monthlyExp.map((amt, ind)=>({
        month:months[ind],
        amount:amt
    }));

    return(
        <div>
            <h2>Expenses by Months</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartDate} margin={{
                    top: 20,
                    right: 10,
                    left:10,
                    bottom:20
                }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#666" />
                    <XAxis dataKey="month" interval={0} angle={-45} />
                    <YAxis tickFormatter={(value)=>`₹${value.toLocaleString("en-IN")}`} />
                    <Bar dataKey="amount" radius={[6, 6, 0,0]} fill="#3b82f6" name="Expense" activeBar={true} />
                    <Tooltip formatter={(value)=>`₹${value.toLocaleString("en-IN")}`} labelStyle={{
                        color: "#3b82f6",
                        fontWeight: 600
                    }} contentStyle={{
                        borderRadius: "8px",
                        boxShadow:"0px 0px 6px #66666691"
                    }} cursor={false} />
                    <Legend />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}


export default MonthlyExp;