async function getYears(setYear, setSelectedYear) {
    try{
        const response = await fetch(`http://localhost:5000/expenses/years`);
        if(!response.ok){
            console.log("failed to fetch years");
        }
        const data = await response.json();
        setYear(data.years);
        setSelectedYear(data.years[0]._id);
    }
    catch(er){
        console.log(er.message);
    }
}

export default getYears;