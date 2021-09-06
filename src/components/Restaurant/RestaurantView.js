import React from "react";
import "./restaurant.css";
import Res1 from "../../assets/images/res7.jpg";
import { Row, Col } from "react-bootstrap";
import TabsPage from "./tabs"; 


const RestaurantView = () => {


    return (
        <>
            <Row className={'justify-content-center'}>
                <Col md={10} className={' main-section mb-5 shadow border-0 bg-white'}>
                    <Row className={' mt-2 justify-content-center'}>
                        <Col md={12}>
                            <img className={'res-img'} src={Res1} alt="img" />
                            <div className={'mt-3'}>
                                <h3 style={{ fontWeight: "700" }}> FAST FOOD 360 </h3>
                                <div className="bar-view1"></div>
                                <div className="bar-view2"></div>
                            </div>
                            <div className="mt-4">
                               <TabsPage />
                            </div>
                        </Col>

                    </Row>
                </Col>
            </Row>

        </>
    )
}

export default RestaurantView