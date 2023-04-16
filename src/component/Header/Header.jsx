import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">RUDRA.</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className=" text-white ps-2 text-decoration-none" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className=" text-white ps-2 text-decoration-none" to="/CreatStory">CreatStory</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className=" text-white ps-2 text-decoration-none" to="">Contact</NavLink>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn btn-outline-success" type="submit" ><NavLink to='/CreatStory' className="text-decoration-none text-white">Add Story</NavLink></button>
        </form>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Header