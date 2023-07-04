import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.tsx';
import JobDescription from './JobDescription';
import AnimationPage from './AnimationPage';


import Header from './Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <AnimationPage />
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div>
        <Header />
        <Home />
      </div>
    ),
  },
  {
    path: "/home/*",
    element: (
      <div>
        <Header />
        <JobDescription />
      </div>
    ),
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
