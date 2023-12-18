
import {


    createBrowserRouter,
  } from "react-router-dom";

import Home from "../Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>,
      loader:()=>fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
     
    },
  ]);
  export default router