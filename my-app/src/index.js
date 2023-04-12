import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Asteroids} from "./pages/Asteroids";
import {Destroyment} from "./pages/Destroyment";
import {Asteroid} from "./pages/Asteroid";


const router = createBrowserRouter([
  {
    path: "/asteroids",
    element: <Asteroids/>
  },
  {
    path: "/destroyment",
    element: <Destroyment/>
  },
  {
    path: "/asteroid/:id",
    element: <Asteroid/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
