import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root/Root';
import Home from './Pages/Home/Home';
import Login from './Routes/Login/Login';
import Register from './Routes/Register/Register';
import EventDetails from './Pages/EventDetails/EventDetails';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import AboutUs from './Routes/AboutUs/AboutUs';
import ErrorElement from './Routes/ErrorElement/ErrorElement';
import OurTeam from './Routes/OurTeam/OurTeam';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
        loader: () => fetch('/events.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/team",
        element: <PrivateRoute><OurTeam></OurTeam></PrivateRoute>
      },
      {
        path: "about",
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
      },
      {
        path: "*",
        element: <ErrorElement></ErrorElement>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
