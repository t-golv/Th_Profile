import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./App";
import Home from "./pages/Home/index";

import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { GlobalStorage } from "./context/GlobalContext";

const rotas = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStorage>
      <RouterProvider router={rotas} />
    </GlobalStorage>
  </React.StrictMode>
);
