import React from "react";
import "./restaurant.css";
import Res1 from "../../assets/images/res7.jpg";
import { Row, Col } from "react-bootstrap";
import RatingStar from "../../lib/RatingStar/RatingStar"
import Menu from "./Menu";
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';


const RestaurantView = () => {
   


    return (
        <>
            <Row className={'justify-content-center'}>
                <Col md={10} className={' main-section mb-5 shadow border-0 bg-white'}>
                    <div className={'container'}>
                        <Row className={' mt-2 justify-content-center'}>
                            <Col md={12}>
                                <img className={'res-img'} src={Res1} alt="img" />
                                <div className={'mt-3'}>
                                    <h3 style={{ fontWeight: "700" }}> FAST FOOD 360 </h3>
                                    <div className="bar-view1"></div>
                                    <div className="bar-view2"></div>
                                </div>
                                <RatingStar />
                                <div className={'d-flex'}>
                                    <div >
                                        <span className="fa-map-marker-alt"><FaMapMarkerAlt /> </span>
                                    </div>
                                    <div className={'ml-2'}>
                                        <p> R-120 Sector R-2 Gulshan-e-Maymar </p>
                                    </div>

                                </div>

                                <div className="mt-4">
                                    <Menu />
                                </div>
                            </Col>

                        </Row>
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default RestaurantView