import React from "react";
import "./App.css";
import { Loader } from "@mantine/core";

import Layout from "./Layout";

function App() {
    return (
        <Layout>
            <Loader></Loader>
        </Layout>
    );
}

export default App;
