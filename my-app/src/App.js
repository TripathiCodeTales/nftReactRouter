import './App.css';
import React, {useContext}from 'react';
import CardList from './CardList';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import CardDetail from './CardDetail';
import Login from './Login';
import AddCart from './AddCart';
import AppProvider from './Contexts/AppProvider';
import DeleteCart from './DeleteCart';
import EditCart from './EditCart';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path:"/cardlist",
      element: <CardList />,
    },
    {
      path: "/AddCart",
      element: <AddCart />
    },
    {
      path: "/DeleteCart",
      element: <DeleteCart />
    },
    {
      path: "carddetails/:DetailsId",
      element: <CardDetail />,

    },
    {
      path: "EditCart/:itemId",
      element: < EditCart />,
    }

  ])

  return (
    <AppProvider >
          <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
