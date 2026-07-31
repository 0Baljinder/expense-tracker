async function updateExpense(id,exp,setExpArray){
    try{
        console.log(id);
        const response = await fetch(`http://localhost:5000/expenses/${id}`, {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(exp)
        });
        if(!response.ok){
            console.log(response);
            throw new Error("Failed to update");
        }
        const data = await response.json();
        setExpArray(prev=>prev.map(exp=>(exp._id===id)?data.expense:exp));
    }
    catch(er){
        console.log(er.message);
    }
}

export default updateExpense;