import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Search from "./pages/Search";

const App = () => {
    return (
        <BrowserRouter>
            <Page>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/product/:productId" element={<ProductDetails />} />

                    <Route path="/search" element={<Search />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/register" element={<Register />} />

                </Routes>
                
            </Page>
        </BrowserRouter>
    );
}

export default App;