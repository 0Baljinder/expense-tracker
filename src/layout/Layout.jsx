import Sidebar from "../components/Sidebar";
import Header from "../pages/Header";
import { Outlet } from "react-router-dom";
import "../styles/layout.css";
import ExpenseForm from "../components/ExpenseForm";
import { useEffect, useContext } from "react";
import ExpFormContext from "../context/ExpFormContext";

function Layout(){
    const {expForm, setExpForm} = useContext(ExpFormContext);
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Sidebar />
            {expForm && <ExpenseForm />}
        </div>
    )
};

export default Layout;