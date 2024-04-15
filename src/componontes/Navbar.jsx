import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand" href="#">MERN Stack Blog</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link active" href="#">Home</Link>
                        <Link to="/login" class="nav-link" href="#">login</Link>
                        <Link to="/register" class="nav-link" href="#">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>

}

export default Navbar