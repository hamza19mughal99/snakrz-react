import React from 'react';
import "../assets/css/style.css";
import User from "../assets/images/user.png"
import Env from "../assets/images/env.png";
import Phone from "../assets/images/phone.png";
import Address from "../assets/images/address.png";
import Zip from "../assets/images/zip.png";



const SellerRegister = () => {
    return (
        <>
            <section className=" py-5 sign-up-section sign-in">
        <div className="container">
            <div className="row">
                <div className="col-8 sign-card">
                    <div className="card sign-up-card rounded shadow border-0 bg-white">
                        <div className="card-body text-center">
                            <h2> BECOME A CUSTOMER</h2>
                           
                            <form action="" className="mt-5">
                                <div className="form-row justify-content-center">
                                    <div className="col-md-8 mb-4">
                                        <label>Owner Name</label>
                                        <img src={User} className="img-form"/>
                                        <input type="text" className="form-control" placeholder="Type  Here" />
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <label>Business Name</label>
                                        <img src={User} className="img-form"/>
                                        <input type="text" className="form-control" placeholder="Type  Here" />
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <label>Email</label>
                                        <img src={Env} className="img-form"/>
                                        <input type="text" className="form-control" placeholder="Type your Email" />
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <label>Shop Address</label>
                                        <img src={Address} className="img-form"/>
                                        <input type="text" className="form-control" placeholder="Type your Address" />
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <label>Zip code</label>
                                        <img src={Zip} className="img-form"/>
                                        <input type="text" className="form-control" placeholder="Type Here"/>
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <label>Contact Number</label>
                                        <img src={Phone} className="img-form"/>
                                        <input type="text" className="form-control" placeholder="Type Here"/>
                                    </div>
                                    
                                    <div className="col-md-6 my-4">
                                        <button type="" className="btn btn-send btn-block">REGISTER</button>
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

export default SellerRegister
