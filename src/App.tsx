import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import TabviewPage from "./page/TabviewPage"

const banner = "\n"+
    "Powered by crypted.";

function App() {
    useEffect(() => {
        console.info(`%c${banner}`, "color: #8070df")
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" element={<TabviewPage/>}/>
                <Route path="/tab" element={<TabviewPage/>}/>
            </Routes>
        </Router>
    );
}


export default App;
