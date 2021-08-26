import React from 'react';
import "../assets/css/style.css";
import User from "../assets/images/user.png"
import Lock from "../assets/images/lock.png";
import Env from "../assets/images/env.png";

const Register = () => {
    return (
        <>
            <section class=" py-5 sign-up-section sign-in">
        <div class="container">
            <div class="row">
                <div class="col-8 sign-card">
                    <div class="card sign-up-card rounded shadow border-0 bg-white">
                        <div class="card-body text-center">
                            <h2>SIGNUP</h2>
                           
                            <form action="" class="mt-5">
                                <div class="form-row justify-content-center">
                                    <div class="col-md-8 mb-4">
                                        <label>First Name</label>
                                        <img src={User} class="img-form"/>
                                        <input type="text" class="form-control" placeholder="Type your Here" />
                                    </div>
                                    <div class="col-md-8 mb-4">
                                        <label>Last Name</label>
                                        <img src={User} class="img-form"/>
                                        <input type="text" class="form-control" placeholder="Type your Here" />
                                    </div>
                                    <div class="col-md-8 mb-4">
                                        <label>Email</label>
                                        <img src={Env} class="img-form"/>
                                        <input type="text" class="form-control" placeholder="Type your Email"/>
                                    </div>
                                    <div class="col-md-8 mb-4">
                                        <label>Password</label>
                                        <img src={Lock} class="img-form"/>
                                        <input type="password" class="form-control" placeholder="Type Your Password"/>
                                    </div>
                                    
                                    <div class="col-md-6 my-4">
                                        <button type="" class="btn btn-send btn-block">SIGN UP</button>
                                    </div>

                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-12">
                                        <p class="sign-or ">OR </p>
                                        
                                    </div>
                                    
                                    <div class="col-md-6 facebook-btn ">
                                        <button type="facebook.com" class="btn btn-send btn-block">continue with facebook</button>
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
