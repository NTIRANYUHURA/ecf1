import React from "react"
// import "../css/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navigation"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation/>
      {children}
    </>

  )
}

export default Layout
