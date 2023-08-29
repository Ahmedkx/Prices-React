import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layouts/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
