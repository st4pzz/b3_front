import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

import './index.css'
import LoginComponent from './components/LoginComponent.tsx';
import ChatPage from './pages/ChatPage.tsx';
import QuizPerguntasPage from './pages/QuizPerguntasPage.tsx';
import QuizIniciarPage from './pages/QuizIniciarPage.tsx';
import LandingPage from './pages/LandingPage.tsx';
import ResultadoQuizPage from './pages/ResultadoQuizPage.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,

  },
  {
    path: "/login",
    element: <LoginComponent />,
    
  },
  {
    path: "chat",
    element: <ChatPage/>,
  },
  {
    path : "quiz/perguntas",
    element: <QuizPerguntasPage/>
  },
  {
    path : "quiz/iniciar",
    element: <QuizIniciarPage/>
  },
  {
    path : "quiz/resultado",
    element: <ResultadoQuizPage/>

  }
  
 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </QueryClientProvider>
)
