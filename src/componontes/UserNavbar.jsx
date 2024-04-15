import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLogoutMutation } from '../redux/api/authApi'
import { toast } from 'react-toastify'

const UserNavbar = () => {
    const [logout] = useLogoutMutation()
    const { auth } = useSelector(state => state.user)

    useEffect(() => {
        if (auth === null) {
            toast.error("logout succes")
        }
    }, [auth])
    return <>
        <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/user" class="nav-link active" href="#">Home</Link>
                        <Link to="/user/blogs" class="nav-link" href="#">blog</Link>
                        {
                            auth && <div class="dropdown">
                                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                    WelCome{auth.name}
                                </button>
                                <ul class="dropdown-menu">
                                    <li><button onClick={logout} class="dropdown-item">Logout</button></li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>

}

export default UserNavbar