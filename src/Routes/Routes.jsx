import React from 'react';
import Main from '../layout/Main';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/home/Home';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import CheckOut from '../pages/CheckOut/CheckOut';
import Bookings from '../pages/Bookings/Bookings';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Registration></Registration>
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
      }
    ]
  },
]);

export default router;