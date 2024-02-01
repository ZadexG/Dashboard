import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';
import ContentWrapper from './components/ContentWrapper';
import UsernInDb from './components/UsersInDb';
import LastPitchInDB from './components/LastPitchInDb';
import Pitch from './components/Pitch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ContentWrapper />
      },
      {
        path: '/last-pitch',
        element: <LastPitchInDB/>
      },
      {
        path: '/users',
        element: <UsernInDb/>
      },
      {
        path: '/pitches',
        element: <Pitch/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);