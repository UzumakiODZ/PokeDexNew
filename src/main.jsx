import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import Favourite from './Pages/Favourite';
import SNE from './Pages/SNE';
import Pokedex from './Pages/Pokedex';
import LandingPage from './Pages/LandingPage';
import Indigo from './Pages/Season & Episode/Indigo';
import Orange from './Pages/Season & Episode/Orange';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App><LandingPage /></App>,
  },
  {
    path: '/home',
    element: <App><Home /></App>,
  },
  {
    path: '/favourite',
    element: <App><Favourite /></App>,
  },
  {
    path: '/SNE',
    element: <App><SNE /></App>,
  },
  {
    path: '/Pokedex',
    element: <App><Pokedex /></App>,
  },
  {
    path: '/season/1',
    element: <App><Indigo/></App>,
  },
  {
    path: '/season/2',
    element: <App><Orange /></App>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
