import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Home from './Home/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AdProjects from './Pages/AdProject/AdProjects.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import AllProject from './Pages/AllProject.jsx';
import AboutPage from './Pages/AboutPage.jsx';
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
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addproject',
        element: <AdProjects></AdProjects>
      },
      {
        path: '/allproject',
        element: <AllProject></AllProject>
      },
      {
        path: '/about',
        element: <AboutPage></AboutPage>
      },
    
    
  ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
  </div>
)
