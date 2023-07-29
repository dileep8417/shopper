import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Page>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Page>
        </BrowserRouter>
    );
}

export default App;