import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { MantineThemeOverride } from "@mantine/core";

// const theme = createTheme({
//     /** Put your mantine theme override here */
// });

const theme: MantineThemeOverride = {
    colorScheme: "dark",
    primaryColor: "green",
};

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <MantineProvider theme={theme}>
        <App />
    </MantineProvider>
);
