import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import "./AddToCart.css";
import NumberFormat from 'react-number-format';

const cart = [
    {
        id: 1,
        name: "Zinger Burger",
        price: "$40",
        quantity: 1,
    },
    {
        id: 2,
        name: "Chicken Burger",
        price: "$20",
        quantity: 1,
    },
    {
        id: 3,
        name: "Quarter Broast",
        price: "$50",
        quantity: 1,
    }
]

const AddToCart = () => {
    return (
        <>
            <Row style={{ justifyContent: "space-around" }} >
                <Col md={'7'} className={' main-section mb-5 shadow border-0 bg-white'}>
                    <div className="container">
                        <h1 style={{ fontWeight: 700 }} className={'mt-3 text-center'}>DELIVERY DETAILS</h1>
                        <hr />
                        <h3 style={{ fontWeight: 600 }}>Personal Details</h3>
                        <div className=" p-details shadow border-0 bg-white mb-5">
                            <div className={'container pt-2 pb-2'}>
                                <h5> OBAID AQEEL </h5>
                                <hr />
                                <p>obaid3035@gmail.com</p>
                                <hr />
                                <p>+92349-2496204</p>

                            </div>
                        </div>
                        <div>
                            <h3 style={{ fontWeight: 600 }} >Payment Method</h3>
                            <div className={'card-details'}>
                                <div className="container">
                                    <p style={{
                                        fontWeight: 600,
                                        paddingTop: '30px',
                                        paddingBottom: "15px"
                                    }}>CREDIT / DEBIT CARD</p>
                                    <Form>
                                        <Row>
                                            <Col md={6}>
                                                <NumberFormat format="#### #### #### ####" className={'form-control detail__form shadow mb-5 border-0 bg-white'}
                                                    placeholder={'CARD NUMBER'} />

                                            </Col>
                                            <Col md={6}>
                                                <NumberFormat placeholder={'CVV'} maxLength={3} form={"###"}
                                                    className={'form-control detail__form shadow border-0 bg-white'} />
                                            </Col>
                                            <Col md={6}>
                                                <NumberFormat format="##/##" placeholder="EXPIRY ( MM/YY )" mask={['M', 'M', 'Y', 'Y']}
                                                    className={'form-control detail__form shadow mb-5 border-0 bg-white'} />
                                            </Col>
                                            <Col md={6}>
                                                <Form.Control placeholder={'POSTAL / ZIP CODE'} className={'detail__form shadow border-0 bg-white'} />
                                            </Col>

                                        </Row>
                                    </Form>
                                </div>
                            </div>
                            <div className={'container'}>
                                <p style={{ fontWeight: 600 }}
                                    className={'mt-3'}
                                >Cash</p>
                            </div>

                            <hr />

                            <button className=" place-order btn-send btn-block mb-5">PLACE ORDER</button>

                        </div>
                    </div>
                </Col>
                <Col md={'4'} className={' main-section mb-5 shadow border-0 bg-white'}>
                    <div className={'container'}>
                        <h3 className={' cart-sec mt-3 text-center'}>IN YOUR CART</h3>
                        <hr />
                        <div className="mt-4" >
                            {
                                cart.map((val) => {
                                    return (
                                        <>
                                            <div className="cart-details d-flex justify-content-between">
                                                <div className="cart-name">
                                                    <p> {val.name} </p>
                                                </div>
                                                <div>
                                                    {val.price}
                                                </div>
                                                <div className="inc-dec">
                                                    <span className="plus">
                                                        <FaPlus />
                                                    </span>
                                                    <span className="quantity">
                                                        {val.quantity}
                                                    </span>
                                                    <span className="minus">
                                                        <FaMinus />
                                                    </span>
                                                </div>
                                                <div className="delete">
                                                    <FaTrash />
                                                </div>

                                            </div>
                                            <hr />
                                        </>
                                    )

                                })
                            }
                        </div>
                        <div className={'summary'}>
                            <hr />
                            <h4>ORDER SUMMARY</h4>
                            <div className={'order-sum'}>
                                <h5>TOTAL</h5>
                                <h4>$ 100</h4>
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </>
    )
}

export default AddToCart