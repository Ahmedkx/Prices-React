import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./Layouts/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Products from "./Pages/Products/Products";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/products" element={<Products />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
