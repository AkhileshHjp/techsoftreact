import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './component/home/home.jsx'
import Layout from './layout.jsx'
import About from './component/about/About.jsx'
import Contact from './component/contactus/Contact.jsx'
import User from './component/user/user.jsx'
import Github, { gitInfo } from './component/github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {path:'',
//        element: <Home/>
//       },
//       {path:'about',
//        element: <About />
//       },
//       {path:'contact',
//        element: <Contact />
//       },
//     ]
// }
// ])


const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='user/:userid' element={<User/>} />
        <Route
        loader={gitInfo}
        path='github' element={<Github/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
