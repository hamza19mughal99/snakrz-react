import React from 'react'
import {Link} from "react-router-dom"
import "../assets/css/style.css";
import User from "../assets/images/user.png"
import Lock from "../assets/images/lock.png";
import { FaGoogle, FaTwitterSquare , FaFacebookSquare } from 'react-icons/fa';


const Login = () => {
    return (
        <>
            <section className=" py-5 sign-up-section sign-in">
        <div className="container">
            <div className="row">
                <div className="col-8 sign-card">
                    <div className="card sign-up-card rounded shadow border-0 bg-white">
                        <div className="card-body text-center">
                            <h2>LOGIN</h2>
                           
                            <form action="" className="mt-5">
                                <div className="form-row justify-content-center">
                                    <div className="col-md-8 mb-4">
                                        <label>Username</label>
                                        <img src={User} className="img-form"/>
                                        <input type="text" className="form-control" placeholder="Type your username" />
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <label>Password</label>
                                        <img src={Lock} className="img-form"/>
                                        <input type="password" className="form-control" placeholder="Type Your Password"/>
                                    </div>
                                    <div className="col-md-8 text-right login-field">

                                        <Link href="http://" target="_blank">Forgot Password?</Link>
                                    </div>
                                    <div className="col-md-6 my-4">
                                        <button type="" className="btn btn-send btn-block">LOGIN</button>
                                    </div>

                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-12 mt-5">
                                        <p>Or Sign Up Using</p>
                                        
                                    </div>
                                    <div className="col-12 social-links">
                                         <Link  className="fa-facebook-square"><FaFacebookSquare /></Link>
                                            <Link className="fa-twitter-square"><FaTwitterSquare/></Link>
                                            <Link className="fa-google"><FaGoogle/></Link>
                                    </div>
                                    <div className="col-md-4 my-4 mt-5">
                                    <Link to="/Register"><button type="signup.html" className="btn btn-send btn-block">SIGN UP</button> </Link>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Login
