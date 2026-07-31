import { NavLink } from "react-router-dom";
import WalletSVG from "../svgs/WalletSVG";
import HomeIcon from "../svgs/HomeIcon";
import StatsIcon from "../svgs/StatsIcon";

function Sidebar(){
    return (
        <section className="sidebar">
            <div className="logo">
                <h2>Expense</h2>
                <h2>Tracker</h2>
            </div>
            <NavLink to="/" className={({isActive})=>isActive?"active":"not-active"}>
                <HomeIcon />
                Home
            </NavLink>
            <NavLink to="/statistics" className={({isActive})=>isActive?"active":"not-active"}>
                <StatsIcon />
                Statistics
            </NavLink>
        </section>
    )
};

export default Sidebar;