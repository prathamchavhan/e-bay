import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home  from "./pages/main/Home";
import { Applayout } from "./components/layout/Applayout";

// or wherever it lives in your project

import { ErrorPage } from "./pages/ErrorPage1";
import Policies from './pages/Policies';


import Timepass from "./pages/Services1/Timepass";

import Carrercoun from "./pages/carrercounselling/Carrercoun";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
    
      { path: "policies", element: <Policies /> },

    
              {path : "services/Timepass",element:<Timepass/>},
{ path: "carrercounselling/carrercoun", element: <Carrercoun /> },

            { path: "carrercounselling/councontact", element: <Carrercoun /> },
       
    ]
  },
]);

export const App = () => <RouterProvider router={router} />;
