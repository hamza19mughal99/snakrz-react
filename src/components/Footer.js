import React from 'react'
import "../assets/css/style.css";
import Logo from "../assets/images/logo.png"
import { FaGlobe, FaLinkedin, FaTwitterSquare , FaFacebookSquare } from 'react-icons/fa';
import {Link} from "react-router-dom"


const Footer = () => {
    return (
        <>
            <footer className="footer-section py-5 ">
                <div className="container ">
                    <div className="footer-top">
                        <div className="row ">
                            <div className="col-lg-6 col-md-3  ">
                                <div className="footer-sec-1 footer-same ">
                                    <img src={Logo} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-9 footer-clm ">
                                <div className="footer-sec-1 footer-same ">
                                    <div className="row footer-col">
                                        <div className="col-md-4 icon-box-f flag-img">
                                            <input className="form-control" list="datalistOptions" id="exampleDataList"
                                                placeholder="USA" />
                                            <datalist id="datalistOptions">
                                                <option value="San Francisco" />
                                                <option value="New York" />
                                                <option value="Seattle" />
                                                <option value="Los Angeles" />
                                                <option value="Chicago" />
                                            </datalist>
                                        </div>
                                        <div className="col-md-4 icon-box-f">
                                             <span className="fas fa-globe"><FaGlobe /></span>
                                            <input className="form-control" list="datalistOptions" id="exampleDataList"
                                                placeholder="ENGLISH" />
                                            <datalist id="datalistOptions" >
                                                <option value="San Francisco" />
                                                <option value="New York" />
                                                <option value="Seattle" />
                                                <option value="Los Angeles" />
                                                <option value="Chicago" />
                                            </datalist>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">

                        <div className=" col-lg-2 col-md-4 ">
                            <div className="footer-sec-2 footer-same ">
                                <h3>COMPANY</h3>
                                <ul>
                                    <li>
                                        <Link></Link> <a>About Us</a>
                                    </li>
                                    <li>
                                        <Link></Link> <a>Policies</a>
                                    </li>
                                    <li>
                                        <Link></Link> <a> Login/Singup</a>
                                    </li>
                                    <li>
                                        <Link></Link> <a> Become a Seller</a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4  ">
                            <div className="footer-sec-2 footer-same ">
                                <h3>FOR FOODIES</h3>
                                <ul>
                                    <li>
                                        <Link></Link> <a>Code of Conduct</a>
                                    </li>
                                    <li>
                                        <Link></Link> <a>Community</a>
                                    </li>
                                    <li>
                                        <Link></Link> <a> Blogger Help</a>
                                    </li>
                                    <li>
                                        <Link></Link> <a> Mobile Apps</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 ">
                            <div className="footer-sec-2 footer-same ">
                                <h3>FOR RESTAURANTS</h3>
                                <ul>
                                    <li>
                                        <Link></Link> <a >Add restaurant</a>
                                    </li>
                                    <li>
                                        <Link></Link> <a >Business App</a>
                                    </li>
                                    <li>
                                        <Link></Link> <a >Restaurant Widgets</a>
                                    </li>
                                    <li>
                                        <Link></Link> <a > Product for Businesses</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4  tb-menu">
                            <div className="footer-sec-2 footer-same ">
                                <h3>For You</h3>
                                <ul>
                                    <li>
                                     <Link></Link> <a>   Privacy </a>
                                    </li>
                                    <li>
                                     <Link></Link> <a>   Terms </a>
                                    </li>
                                    <li>
                                     <Link></Link> <a>   Security </a>
                                    </li>
                                    <li>
                                     <Link></Link> <a>    Sitemap </a>
                                     </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 tb-menu ">
                            <div className="footer-sec-2 footer-same ">
                                <h3>SOCIAL LINKS</h3>
                                <a  target="_blank "><i className="fab fa-facebook-square"> <FaFacebookSquare/></i></a>
                                <a  target="_blank "><i className="fab fa-twitter-square "><FaTwitterSquare/></i></a>
                                <a  target="_blank "><i className="fab fa-linkedin "><FaLinkedin/></i></a>
                            </div>
                        </div>
                        {/* <div className="col-md-12 text-left ">

                        </div> */}



                    </div>

                </div>

            </footer>

            <section className="copyright-section text-center py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <p className="mb-0 ">By continuing past this page, you agree to our Terms of Service, Cookie Policy,
                                Privacy Policy and Content Policies. All trademarks are properties of their respective owners.
                                2008- <br/>
                                2021 © Eat Home™ Ltd. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
