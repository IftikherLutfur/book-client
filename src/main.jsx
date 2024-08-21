import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes.jsx';
import AuthProvider from './Comonents/Authentication/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router}/>
   </AuthProvider>
  </StrictMode>,
)
