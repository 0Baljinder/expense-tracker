import { useContext } from "react";
import ExpArrayContext from "../context/ExpArrayContext";
import { Tooltip, BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

function CategoryExp(){
    const {expArray, setExpArray, ExpArrayHadler} = useContext(ExpArrayContext);
    const categoryTotals = {};
    expArray.forEach((exp)=>{
        if(!categoryTotals[exp.category]){
            categoryTotals[exp.category] = 0;
        }
        categoryTotals[exp.category]+=exp.amount;
    })
    const categoryData = Object.entries(categoryTotals).map(([name, expense])=>({
        name,
        expense
    }));

    return(
        <div>
        <h2>Expenses by Categories</h2>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData} margin={{
                top:20,
                right:10,
                bottom:20,
                left:10
            }}>
                <XAxis dataKey="name" interval={0} angle={-15} />
                <YAxis dataKey="expense" />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#666" />
                <Bar dataKey="expense" radius={[6, 6, 0, 0]} fill="#3b82f6" maxBarSize={80} />
                <Tooltip formatter={(val)=>`₹${val.toLocaleString("en-IN")}`} labelStyle={{
                    color:"#3b82f6",
                    fontWeight:600
                }} contentStyle={{
                    borderRadius:"8px",
                    boxShadow:"0px 0px 6px #66666691"
                }} cursor={false} />
            </BarChart>
        </ResponsiveContainer>
        </div>
    );
}

export default CategoryExp;