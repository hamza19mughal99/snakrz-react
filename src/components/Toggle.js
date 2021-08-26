import React , {useState} from 'react'
import { FiMenu } from 'react-icons/fi';
import { Link } from "react-router-dom";
import "../assets/css/style.css"


const Toggle = () => {
    return (
        <>
            <nav className="navbar bg-white header-bottom float-left" id="navBar">
                <div className="container">
                    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fi-menu"><FiMenu /></span>
                    </button>
                    <div id="navbarCollapse " className="collapse navbar-collapse" >
                        
                        <ul className="nav navbar-nav ml-auto">

                            <li className="nav-item">
                                <Link to="/About"> <a className="nav-link custom-nav-link mx-2">About Us</a> </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Policies"> <a className="nav-link custom-nav-link mx-2">Policies</a> </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Login">    <a className="nav-link custom-nav-link mx-2">Login/Signup</a> </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="Seller">    <a className="nav-link custom-nav-link mx-2">Become a seller</a> </Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Toggle
