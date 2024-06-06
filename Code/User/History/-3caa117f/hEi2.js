import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./static/css/style.css";

import { Home } from "./routes/Home";
import { Dodaj } from "./routes/Dodaj";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dodaj/",
    element: <div></div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
