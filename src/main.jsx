import React from 'react'
import ReactDOM from 'react-dom/client'
import {  HelmetProvider } from 'react-helmet-async'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './pages/Routes/Routes';
import AuthProvider from './components/AuthProvider/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
 
      <QueryClientProvider client={queryClient}>
     <HelmetProvider>
    <RouterProvider router={router} />

    </HelmetProvider>
    </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>,
)
