import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import Home from './pages/Home';
import Contact from './pages/Contact';
import { MyThemeProvider } from './theme';


const router = createBrowserRouter([
    {
        path: "/", 
        element: <Home/>
    }, 
    {
        path: "/contact", 
        element: <Contact/>
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MyThemeProvider>
            <RouterProvider router={router}/>
        </MyThemeProvider>
    </StrictMode>
)
