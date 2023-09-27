import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import DonationDetails from './components/DonationDetails/DonationDetails';
import DonationPage from './components/DonationPage/DonationPage';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children:[
      {
      path: "/",
      element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <DonationPage></DonationPage>,
        },
       {
       path: "/statistics",
       element: <Statistics></Statistics>,
       loader:() => fetch('./data.json')
       },
       {
        path: "/donation/:id",
        element: <DonationDetails></DonationDetails>,
        }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
