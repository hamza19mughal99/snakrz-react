import React from 'react';
import "../assets/css/style.css";
import User from "../assets/images/user.png"
import Env from "../assets/images/env.png";
import Phone from "../assets/images/phone.png";
import Address from "../assets/images/address.png";
import Zip from "../assets/images/zip.png";



const Seller = () => {
    return (
        <>
            <section class=" py-5 sign-up-section sign-in">
        <div class="container">
            <div class="row">
                <div class="col-8 sign-card">
                    <div class="card sign-up-card rounded shadow border-0 bg-white">
                        <div class="card-body text-center">
                            <h2> BECOME A SELLER</h2>
                           
                            <form action="" class="mt-5">
                                <div class="form-row justify-content-center">
                                    <div class="col-md-8 mb-4">
                                        <label>Owner Name</label>
                                        <img src={User} class="img-form"/>
                                        <input type="text" class="form-control" placeholder="Type  Here" />
                                    </div>
                                    <div class="col-md-8 mb-4">
                                        <label>Business Name</label>
                                        <img src={User} class="img-form"/>
                                        <input type="text" class="form-control" placeholder="Type  Here" />
                                    </div>
                                    <div class="col-md-8 mb-4">
                                        <label>Email</label>
                                        <img src={Env} class="img-form"/>
                                        <input type="text" class="form-control" placeholder="Type your Email" />
                                    </div>
                                    <div class="col-md-8 mb-4">
                                        <label>Shop Address</label>
                                        <img src={Address} class="img-form"/>
                                        <input type="text" class="form-control" placeholder="Type your Address" />
                                    </div>
                                    <div class="col-md-8 mb-4">
                                        <label>Zip code</label>
                                        <img src={Zip} class="img-form"/>
                                        <input type="text" class="form-control" placeholder="Type Here"/>
                                    </div>
                                    <div class="col-md-8 mb-4">
                                        <label>Contact Number</label>
                                        <img src={Phone} class="img-form"/>
                                        <input type="text" class="form-control" placeholder="Type Here"/>
                                    </div>
                                    
                                    <div class="col-md-6 my-4">
                                        <button type="" class="btn btn-send btn-block">REGISTER</button>
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

export default Seller
