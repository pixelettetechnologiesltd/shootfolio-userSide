import React from 'react'
import Header from "../../Components/Header"
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Index = () => {
  return (
    <div>
        <Header/>
        <ToastContainer />
        <Outlet/>
    </div>
  )
}

export default Index