
async function getExpenses(setGetExp,setExpArray,expArray, sort, month, selectedYear){
    try{
        const response = await fetch(`http://localhost:5000/expenses?month=${month}&year=${selectedYear}&sort=${sort}`);
        if(!response.ok){
            console.log("Failed to fetch data");
        }
        const data = await response.json();

        setExpArray(data.expenses);
        if(expArray.length===0){
            setGetExp(true);
            return;
        }
        setGetExp(false);
    }
    catch(er){
        console.log(er.message);
    }
}

export default getExpenses;