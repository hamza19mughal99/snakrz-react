import React from 'react';
import "../assets/css/style.css";
import User from "../assets/images/user.png"
import Lock from "../assets/images/lock.png";
import Env from "../assets/images/env.png";

const Register = () => {
    return (
        <>
            <section className=" py-5 sign-up-section sign-in">
        <div className="container">
            <div className="row">
                <div className="col-8 sign-card">
                    <div className="card sign-up-card rounded shadow border-0 bg-white">
                        <div className="card-body text-center">
                            <h2>SIGNUP</h2>
                           
                            <form action="" className="mt-5">
                                <div className="form-row justify-content-center">
                                    <div className="col-md-8 mb-4">
                                        <label>First Name</label>
                                        <img src={User} className="img-form"/>
                                        <input type="text" className="form-control" placeholder="Type your Here" />
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <label>Last Name</label>
                                        <img src={User} className="img-form"/>
                                        <input type="text" className="form-control" placeholder="Type your Here" />
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <label>Email</label>
                                        <img src={Env} className="img-form"/>
                                        <input type="text" className="form-control" placeholder="Type your Email"/>
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <label>Password</label>
                                        <img src={Lock} className="img-form"/>
                                        <input type="password" className="form-control" placeholder="Type Your Password"/>
                                    </div>
                                    
                                    <div className="col-md-6 my-4">
                                        <button type="" className="btn btn-send btn-block">SIGN UP</button>
                                    </div>

                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <p className="sign-or ">OR </p>
                                        
                                    </div>
                                    
                                    <div className="col-md-6 facebook-btn ">
                                        <button type="facebook.com" className="btn btn-send btn-block">continue with facebook</button>
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

export default Register
