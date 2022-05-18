import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Socialmedia App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
    <Link className="nav-link active" to='/'>Add Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  to='/Search'>Search Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/view'>View Post</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header