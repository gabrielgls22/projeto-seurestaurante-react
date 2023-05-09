import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Cardapio from "./components/cardapio/Cardapio";
import Home from "./components/home/Home";
import ErroPaginaNaoEncontrada from "./components/erros/ErroPaginaNaoEncontrada";

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    errorElement: <ErroPaginaNaoEncontrada />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "cardapio/:nomeEmpresa",
            element: <Cardapio />
        }
    ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Routes />
    </RouterProvider>
  </React.StrictMode>
);
