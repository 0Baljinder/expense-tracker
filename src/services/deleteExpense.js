async function deleteExpense(id,setExpArray){
    try{
        console.log(id);
        const response = await fetch(`http://localhost:5000/expenses/${id}`,{
            method:"DELETE"
        });
        setExpArray(prev=>prev.filter((exp)=>exp._id!==id))
    }
    catch(er){
        console.log("couldn't delete");
    }
}

export default deleteExpense;