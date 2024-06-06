import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./static/css/style.css";

import { Home } from "./routes/Home/Home.jsx";
import { Dodaj } from "./routes/Dodaj/Dodaj.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dodaj/",
    element: <Dodaj />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
