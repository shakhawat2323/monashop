import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Productlisting from "../Productpage/Productslider/Productlisting";
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
    ],
  },
]);
