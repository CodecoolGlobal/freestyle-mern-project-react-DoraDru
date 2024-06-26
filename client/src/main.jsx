import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home';
import DeleteEvent from './Pages/DeleteEvent';
import EventCreator from './Pages/EventCreator';
import EventUpdater from './pages/EventUpdater';
import BuyTickets from './pages/BuyTickets';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/delete/:id',
        element: <DeleteEvent />
      },
      {
        path: '/event/new',
        element: <EventCreator />
      },
      {
        path: '/event/update/:id',
        element: <EventUpdater />
      },
      {
        path: '/tickets/:id',
        element: <BuyTickets />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
