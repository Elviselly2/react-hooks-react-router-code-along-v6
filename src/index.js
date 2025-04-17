import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from './components/UserProfile';

const router= createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/",
        element:<About/>
    },
    {
        path:"/",
        element:<Login/>
    }, 
    {
        path: "/profile/:id",
        element: <UserProfile />,
        errorElement: <errorPage />
      }
      
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);