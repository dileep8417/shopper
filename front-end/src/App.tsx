import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Search from "./pages/Search";
import { baseUrl } from "./utils";

const App = () => {
    return (
        <BrowserRouter>
            <Page>
                <Routes>
                    <Route path={baseUrl('/')} element={<Home />} />

                    <Route path={baseUrl('/product/:productId')} element={<ProductDetails />} />

                    <Route path={baseUrl('/search')} element={<Search />} />

                    <Route path={baseUrl('/login')} element={<Login />} />

                    <Route path={baseUrl('/register')} element={<Register />} />

                </Routes>
                
            </Page>
        </BrowserRouter>
    );
}

export default App;