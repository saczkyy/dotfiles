import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./static/css/style.css";

import { Home } from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);


function App() {
  return (
    
  );
}

export default App;
