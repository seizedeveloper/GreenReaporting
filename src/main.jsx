import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import Courier from './components/Courier/Courier.jsx'
import Fashion from './components/Fashion/Fashion.jsx'
import E_Commerce from './components/E-commerce/E_Commerce.jsx'
import Technology_IT from './components/Technology-IT/Technology_IT.jsx'
import T_Report from './components/report/Technology_report.jsx'
import F_Report from './components/report/Fashion_report.jsx'
import E_Report from './components/report/E_Commers_report.jsx'
import C_Report from './components/report/Courier_report.jsx'
import Transport from './components/Transportation and Logistics/Transportation and Logistics.jsx'
import TR_Report from './components/report/Transportation_and_Logistics_report.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'courier',
        element: <Courier />,
      },
      {
        path: 'fashion',
        element: <Fashion />,
      },
      {
        path: 'technology_it',
        element: <Technology_IT />,
      },
      ,
      {
        path: 'e_commerce',
        element: <E_Commerce />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
      {
        path: 't_report',
        element: <T_Report />,
      },
      {
        path: 'f_report',
        element: <F_Report />,
      },
      {
        path: 'c_report',
        element: <C_Report />,
      },
      {
        path: 'e_report',
        element: <E_Report />,
      },
      {
        path: 'transportation',
        element: <Transport />,
      },
      {
        path: 'tr_report',
        element: <TR_Report />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
