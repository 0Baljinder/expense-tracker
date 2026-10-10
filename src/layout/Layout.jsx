import Sidebar from "../components/Sidebar";
import Header from "../pages/Header";
import { Outlet } from "react-router-dom";
import "../styles/layout.css";
import ExpenseForm from "../components/ExpenseForm";
import { useEffect, useContext } from "react";
import ExpFormContext from "../context/ExpFormContext";
import Loadingcontext from "../context/LoadingContext";
import LoadingIcon from "../svgs/LoadingIcon";

function Layout(){
    const {expForm, setExpForm} = useContext(ExpFormContext);
    const {loading, setLoading} = useContext(Loadingcontext);
    return (
        <div className="layout">
            <Header />
            <main>
                {loading && <LoadingIcon />}
                <Outlet />
            </main>
            <Sidebar />
            {expForm && <ExpenseForm />}
        </div>
    )
};

export default Layout;