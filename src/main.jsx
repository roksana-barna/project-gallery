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
import AboutPage from './Pages/AboutPage.jsx';

import {
  QueryClient,
QueryClientProvider,
} from '@tanstack/react-query'
import Manageproject from './Layout/Dashboard/AdminDashboard/Manageproject.jsx';
import Managestudent from './Layout/Dashboard/AdminDashboard/Managestudent.jsx';
import Dashboard from './Layout/Dashboard/Dashboard.jsx';
import AppoveProject from './Pages/ApproveProject.jsx';
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx';
import Update from './Components/Update/Update.jsx';

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
        path: '/approveproject',
        element: <AppoveProject></AppoveProject>
      },
      {
        path: '/about',
        element: <AboutPage></AboutPage>
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://project-gallery-server.vercel.app/update/${params.id}`)
      },
      {
        path: "/viewdetails/:id",
        element:<ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`https://project-gallery-server.vercel.app/viewdetails/${params.id}`)

      },
    
    
  ]
},
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'manageproject',
        element:<Manageproject></Manageproject>
      },
      {
        path: 'managestudent',
        element:<Managestudent></Managestudent>
      },

    ]
    }


]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>

      <RouterProvider router={router} />
      </QueryClientProvider>

      </AuthProvider>
  </React.StrictMode>,
  </div>
)
