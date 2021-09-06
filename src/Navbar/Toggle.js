import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Toggle.css";

const Toggle = () => {
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5 mb-3">
                    <div>
                        <div id="myNav" className="overlay">
                            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}><AiOutlineCloseCircle style={{ fontSize: "30px" }} /></a>
                            <div className="overlay-content">
                                <NavLink to="/" onClick={closeNav}><li>Home</li> </NavLink>
                                <NavLink to="/about" onClick={closeNav}><li>About</li> </NavLink>
                                <NavLink to="/policies" onClick={closeNav}><li>Policies</li> </NavLink>
                                <NavLink to="login" onClick={closeNav}><li>Login</li> </NavLink>
                                <NavLink to="register" onClick={closeNav}><li>Register</li> </NavLink>
                                <NavLink to="/addToCart" onClick={closeNav} className="cart" >  <ShoppingCartIcon style={{fontSize: 40}} /> </NavLink>

                            </div>
                        </div>
                        <span style={{ fontSize: '30px', cursor: 'pointer', color: "#FF4200" }} onClick={openNav}><GiHamburgerMenu /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toggle