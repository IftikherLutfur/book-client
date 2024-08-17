import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "./Root";
import Home from "./Comonents/Home";
import Register from "./Comonents/Authentication/Register";

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
        }
      ]
    },
  ]);

  export default router;