import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/components/Root';
import Donation from './assets/pages/Donation';
import Statistics from './assets/pages/Statistics';
import Detailes from './assets/components/Detailes';
import ErrorPage from './assets/pages/ErrorPage';
import Home from './assets/pages/Home';
const myRouter=createBrowserRouter([
  {
    path:'/',
    element: <Root> </Root>,
    // errorElement: <ErrorPage> </ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home> </Home>, 
         loader: () => fetch('/data.json')        
      },
      {
        path:'/donation',
        element: <Donation> </Donation>
      },
      {
        path:'/statistics',
        element: <Statistics> </Statistics>,
        loader: () => fetch('/data.json') 

      },
      {
        path:'/detailes/:id',
        element: <Detailes> </Detailes>,
        loader: () => fetch('../data.json')
      },
     
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter}></RouterProvider>
   
  </React.StrictMode>,
)
