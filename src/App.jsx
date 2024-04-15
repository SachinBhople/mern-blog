import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Navbar from './componontes/Navbar'
import Detaills from './pages/Detaills'
import Login from './pages/Login'
import Register from './pages/Register'
import UserNavbar from './componontes/UserNavbar'
import Account from './pages/user/Account'
import Userblog from './pages/user/Userblog'
import AdminNavbar from './componontes/AdminNavbar'
import Dashboard from './pages/admin/Dashboard'
import AdminUser from './pages/admin/AdminUser'
import AdminBlog from './pages/admin/AdminBlog'
import Home from './pages/Home'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return <>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<> <Navbar /><Outlet />  </>}>
          <Route index element={<Home />} />
          <Route path='details/:blogId' element={<Detaills />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path="/user" element={<><UserNavbar /> <Outlet /> </>}>
          <Route index element={<Account />} />
          <Route path='blogs' element={<Userblog />} />
        </Route>

        <Route path="/admin" element={<><AdminNavbar /> <Outlet /> </>}>
          <Route index element={<Dashboard />} />
          <Route path='user' element={<AdminUser />} />
          <Route path='blogs' element={<AdminBlog />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter >

  </>

}

export default App