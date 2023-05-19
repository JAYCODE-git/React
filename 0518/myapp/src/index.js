import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App2 from "./App2";
// import App3 from "./App3";
// import App4 from "./App4";

//Hook - Custom Hook
import App5 from "./App5";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<App />);
// root.render(<App2 />);
// root.render(<App3 />);
// root.render(<App4 />);

//Hook - Custom Hook
root.render(<App5 />);
