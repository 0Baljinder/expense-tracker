import express from "express";
import Expense from "../models/expense.js";

const expenseRouter = express.Router();

expenseRouter.post("/", async (req, res)=>{
    try{
        const expense = new Expense(req.body);
        await expense.save();

        res.status(201).json({
            success:true,
            message:expense
        });
    }catch(er){
        res.status(500).json({
            message:er.message
        });
        console.log(er);
    }
});

expenseRouter.get("/years", async(req,res)=>{
    try{
        const years = await Expense.aggregate([
            {
                $project:{
                    year:{
                        $year:"$date"
                    }
                }
            },
            {
                $group:{
                    _id:"$year"
                }
            },
            {
                $sort:{
                    _id:-1
                }
            }
        ])
        res.status(201).json({
            success:true,
            count:years.length,
            years:years
        });
    }
    catch(er){
        res.status(500).json({
            success:false,
            message:er.message
        })
    }
})

expenseRouter.get("/", async (req, res)=>{
    try
    {
        const {month, year, sort} = req.query;

        let sorting = {};
        switch(sort){
            case "newest":
                sorting = {date:-1};
                break;
            
            case "oldest":
                sorting = {date:1};
                break;

            case "highest":
                sorting = {amount:-1};
                break;

            case "lowest":
                sorting = {amount:1};
                break;

            default:
                sorting = {amount:-1}
        }


        const filter = {};
        let expenses;
        if(month==="all"){
            const startingDate = new Date(Number(year), 0, 1);
            const endingDate = new Date(Number(year)+1, 0, 1);
            filter.date = {
                $gte:startingDate,
                $lt:endingDate
            }
            expenses = await Expense.find(filter).sort(sorting);    
        }
        else{
            const startingDate = new Date(Number(year), Number(month), 1);
            const endingDate = new Date(Number(year), Number(month)+1, 1);
            filter.date = {
                $gte:startingDate,
                $lt:endingDate
            };

            

            expenses = await Expense.find(filter).sort(sorting);
        }
        
        res.status(201).json({
            success:true,
            count:expenses.length,
            expenses:expenses
        });
    }
    catch(er){
        res.status(500).json({
            success:false,
            message:er.message
        });
    }
});

expenseRouter.put("/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        const expense = await Expense.findOneAndUpdate(
        {_id:id},
        {
            $set:{
                expenseName:req.body.expenseName,
                amount:req.body.amount,
                date:req.body.date,
                category:req.body.category,
                description:req.body.description
            }
        },
        {new:true}
    );

        res.status(200).json({
            success:true,
            expense:expense
        });
    }
    catch(er){
        res.status(500).json({
            success:false,
            message:"Expense not found"
        });
        console.log(er.message);
    }
})

expenseRouter.delete("/:id", async(req, res)=>{
    try{
        const id = req.params.id;
        console.log(req.params.id);
        const deleteExpense = await Expense.findByIdAndDelete(id);

        if(!deleteExpense){
            return res.status(404).json({
                success:false,
                message:"Expense not found"
            });
        }

        res.status(200).json({
            success:true,
            message:"Expense deleted successfully"
        });
    }
    catch(er){
        res.status(500).json({
            success:false,
            message:"Failed to delete"
        });
    }
})

export default expenseRouter;