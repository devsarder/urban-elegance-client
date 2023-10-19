import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddProducts from "../components/AddProducts/AddProducts";
import Login from "../components/userCreating/Login";
import Register from "../components/userCreating/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      
    ]
  },
  {
    path: "/products",
    element: <AddProducts></AddProducts>,  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
