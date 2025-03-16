import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Productlisting from "../Productpage/Productslider/Productlisting";
import ProductDetals from "../Productpage/ProductDetals";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/productlist",
        element: <Productlisting></Productlisting>,
      },
      {
        path: "/productdetels/:id",
        element: <ProductDetals></ProductDetals>,
      },
    ],
  },
]);
