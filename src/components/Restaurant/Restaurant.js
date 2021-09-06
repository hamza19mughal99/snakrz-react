import React from 'react';
import { NavLink } from 'react-router-dom';
import Homesection from '../Home/Homesection';
import { FaMapMarkerAlt } from 'react-icons/fa';
import "../../assets/css/style.css";
import Res1 from "../../assets/images/res1.png"
import Res2 from "../../assets/images/res2.png"
import Res3 from "../../assets/images/res3.png"
import Res4 from "../../assets/images/res4.png"
import Res5 from "../../assets/images/res5.png"
import Res6 from "../../assets/images/res6.png"

const Restaurant = () => {

    const res = [
        {
            id: 1,
            img: Res1
        },
        {
            id: 2,
            img: Res2
        },
        {
            id: 3,
            img: Res3
        },
        {
            id: 4,
            img: Res4
        },
        {
            id: 5,
            img: Res5
        },
        {
            id: 6,
            img: Res6
        },
        {
            id: 7,
            img: Res2
        },
        {
            id: 8,
            img: Res1
        },
        {
            id: 9,
            img: Res3
        },
        {
            id: 10,
            img: Res6
        },
        {
            id: 11,
            img: Res5
        },
        {
            id: 12,
            img: Res4
        },
    ]

    return (
        <>
            <Homesection />

            {/* Product section */}

            <section className="py-5 restaurant-section">
                <div className="container">
                    <div className="row">
                        {
                            res.map((val) => {
                                return (
                                    <>
                                        <div className="col-md-6 col-lg-3 col-sm-12 mb-5">
                                            <div className="pro-img"><img src={val.img} /></div>
                                            <div className="pro-head ">
                                                <div>
                                                    <p className="text-left">Lorem ipsum</p>
                                                    <i><FaMapMarkerAlt /></i><span>Lorem ipsum</span>
                                                </div>
                                            <NavLink to="/RestaurantView"><button className={'btn-primary text-center'}>Visit</button></NavLink>
                                            </div>
                                        </div>
                                    </>
                                )

                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Restaurant
