import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./static/css/style.css";

import { Home } from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
