import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home';
import './Styles/index.scss'
import ModeContextProvider from './Utils/Context/ModeContext';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModeContextProvider>
    <Toaster
      position="center-top"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
    />
    <RouterProvider router={router} />
    </ModeContextProvider>
  </StrictMode>,
)
