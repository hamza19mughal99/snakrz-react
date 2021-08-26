import React from 'react'
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import cat1 from "../assets/images/cat1.png"
import cat2 from "../assets/images/cat2.png"
import cat3 from "../assets/images/cat3.png"
import cat4 from "../assets/images/cat4.png"

const Corousel = () => {
    return (
        <>
            <section className="py-5 product-section">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-md-12 text-center">
                            <h3 className="section-title">Categories</h3>
                            <div className="bar-one"></div>
                            <div className="bar-two"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel items={4}
                                className="owl-theme"
                                loop
                                nav
                                margin={20}
                                autoplay={true} >

                                <div className="item">
                                    <Link to="/HomeCooked">
                                        <div className="box-product">
                                            <div className="pro-img"><img src={cat1} /></div>
                                            <div className="pro-head ">
                                                <p className="text-center">Homecooked food</p>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="Dessert">
                                        <div className="box-product">
                                            <div className="pro-img"><img src={cat2} /></div>
                                            <div className="pro-head ">
                                                <p className="text-center">desserts</p>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="Drinks">
                                        <div className="box-product">
                                            <div className="pro-img"><img src={cat3} /></div>
                                            <div className="pro-head ">
                                                <p className="text-center">drinks</p>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <div className="box-product">
                                        <div className="pro-img"><img src={cat4} /></div>
                                        <div className="pro-head ">
                                            <p className="text-center">others</p>
                                        </div>

                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Corousel
