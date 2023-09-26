import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/root/root';
import Home from './components/home/home';

import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import DonationDetails from './components/DonationDetails/DonationDetails';

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
        element: <Donation></Donation>,
        },
       {
       path: "/statistics",
       element: <Statistics></Statistics>,
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
