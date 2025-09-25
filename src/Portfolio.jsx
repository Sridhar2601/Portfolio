import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactget from "./Contactget";
function Portfolio() {
    return (
        <div className="Port">
            <BrowserRouter>
                <Routes>
                    <Route path="/get" element={[<Contactget />]}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default Portfolio;
