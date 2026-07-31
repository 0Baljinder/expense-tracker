async function createExpense(expense,setExpArray) {
    try{
        const response = await fetch("http://localhost:5000/expenses", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(expense)
        });
        if(!response.ok){
            throw new Error("Failed to create expense");
        }
        const data = await response.json();
        console.log(data.message._id);
        setExpArray(prev=>{return[...prev, data.message]});
    }
    catch(er){
        console.log(er.message);
    }
}

export default createExpense;