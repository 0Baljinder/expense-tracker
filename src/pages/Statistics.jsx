import MonthlyExp from "../components/MonthlyExp";
import CategoryExp from "../components/CategoryExp";


function Statistics(){
    return (
        <div className="statistics">
            <MonthlyExp />
            <CategoryExp />
        </div>
    )
};

export default Statistics;