import React  from 'react'
import "../assets/css/style.css"
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png"
import Toggle from './Toggle';

const Nav = () => {
   
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                       <Toggle/> 
                    </div>
                    <div className="col-md-12 logo-sec text-center">
                        <Link to="/">   <a className="navbar-brand">
                            <img src={Logo} className="img-fluid" />
                        </a>  </Link>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Nav
