import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import React from "react";
import store from "./components/features/store";
import App from "./App";
import "./index.sass";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find root element")
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
