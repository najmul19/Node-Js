import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './componests/Main.jsx';
import Phones from './componests/Phones.jsx';
import Phone from './componests/Phone.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader: ()=> fetch('http://localhost:5000/phones')
      },
      {
        path: '/phone/:id',
        element: <Phone></Phone>,
        loader: ({params})=> fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ],
  },
]);;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
