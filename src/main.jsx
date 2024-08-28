import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// importing react-router-dom
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import About from './pages/about.jsx'
import Blog from './pages/blog.jsx'

// Creating the  Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/blog',
    element: <Blog />,
  }
]); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)