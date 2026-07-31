import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Statistics from "./pages/Statistics";
import Layout from "./layout/Layout";

function App(){
    return (
        <>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/statistics" element={<Statistics />} />
                </Route>
            </Routes>
        </>
    )
};

export default App;