import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "./Root";
import Home from "./Comonents/Home";
import Register from "./Comonents/Authentication/Register";
import Homies from "./Comonents/Homies";
import Brands from "./Comonents/Brands";
import Sorting from './Comonents/Sorting'

  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Root/>,
      children:[
        {
          path:'/',
          element:<Register/>

        },
        {
            path:'/categories',
            element:<Home/>
        },
        {
          path:'/home',
          element:<Homies/>
        },
        {
          path:'/brand',
          element:<Brands/>
        },
        {
          path:"/sorting",
          element:<Sorting/>
        }
      ]
    },
  ]);

  export default router;