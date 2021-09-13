import React, {useContext} from "react";
import { CartContext } from '../GlobalStore/CartContext';
import { Row, Col, Form } from "react-bootstrap";
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import "./AddToCart.css";
import NumberFormat from 'react-number-format';


const AddToCart = () => {

    let cart = JSON.parse(localStorage.getItem('cart'))


    const { shoppingCart, totalAmount, dispatch } = useContext(CartContext)

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
                                cart.length > 0 ?
                                cart.map((val) => {
                                    return (
                                        <>
                                            <div key={val.id} className="cart-details d-flex justify-content-between">
                                                <div className="cart-name">
                                                    <p> {val.name} </p>
                                                </div>
                                                <div>
                                                    ${val.price}
                                                </div>
                                                <div className="inc-dec">
                                                    <span className="plus">
                                                        <FaPlus 
                                                        onClick={
                                                            () =>
                                                                dispatch({
                                                                    type: 'INC',
                                                                    id: val.id,
                                                                    val
                                                                })
                                                        }
                                                        />
                                                    </span>
                                                    <span className="quantity">
                                                        {val.Quantity}
                                                    </span>
                                                    {
                                                        val.Quantity > 1 ? 
                                                        <span className="minus">
                                                        <FaMinus 
                                                        
                                                        onClick={
                                                            () =>
                                                                dispatch({
                                                                    type: 'DRC',
                                                                    id: val.id,
                                                                    val
                                                                })

                                                        }
                                                        />
                                                    </span> :
                                                    <span className="minus"> 
                                                    <FaMinus />
                                                    </span>
                                                    }
                                                    
                                                </div>
                                                <span>
                                                ${val.Quantity * val.price}    
                                                </span>
                                                <div className="delete">
                                                    <FaTrash 
                                                    onClick={
                                                        () =>
                                                            dispatch({
                                                                type: 'TRASH',
                                                                id: val.id,
                                                                val
                                                            })

                                                    }
                                                    />
                                                </div>

                                            </div>
                                            <hr />
                                        </>
                                    )

                                }) : <div className={'text-center'}>
                                    Cart is empty
                                </div>
                            }
                        </div>
                        <div className={'summary'}>
                            <hr />
                            <h4>ORDER SUMMARY</h4>
                            <div className={'order-sum'}>
                                <h5>TOTAL</h5>
                                <h4>$ {totalAmount}</h4>
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </>
    )
}

export default AddToCart