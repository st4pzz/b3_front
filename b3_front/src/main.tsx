import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

import './index.css'
import LoginComponent from './components/LoginComponent.tsx';
import ChatPage from './pages/ChatPage.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComponent />,
    
  },
  {
    path: "Chat",
    element: <ChatPage/>,
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </QueryClientProvider>
)
