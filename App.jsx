import React from 'react'
import { createBrowserRouter,BrowserRouter, Routes,Route, RouterProvider,Link } from "react-router";
import './App.css'

import Home from './Components/Homepage/Home'
import Listpage from './Components/List/Listpage';
import Layout from './Components/Layout/Layout';
import Singlepage from './SingleListPage/Singlepage';

function App() {
  
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },{
          path:"/list",
          element:<Listpage/>
        },{
          path:"/singlelist",
          element:<Singlepage/>
        },
      ]
    }
   
  ]);
  return (<RouterProvider router={router}></RouterProvider>)
}

export default App
