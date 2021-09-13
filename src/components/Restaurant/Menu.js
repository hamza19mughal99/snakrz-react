import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../GlobalStore/ProductContext';
import { Row, Col } from "react-bootstrap";
import { CartContext } from '../GlobalStore/CartContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./restaurant.css"
import Paper from '@material-ui/core/Paper';




const Menu = () => {

    const { menu } = useContext(ProductContext);
    const { shoppingCart, dispatch, totalQuantity } = useContext(CartContext);

    return (
        <>

            <Paper elevation={4}>
                {
                    shoppingCart.length > 0 ? <div className={'main_menu d-flex justify-content-end p-2'}>
                        <NavLink to="/addToCart">     <button className={'check_btn'} >Go To Checkout
                            <ShoppingCartIcon style={{
                                fontSize: 35,
                                paddingLeft: '5px',
                                paddingRight: '5px'
                            }} />
                            <span className={'counter'}>{totalQuantity}</span>
                        </button> </NavLink>
                    </div> :
                        <div className={'disable_menu text-muted d-flex justify-content-end p-2'}>
                            <NavLink to="/addToCart">     <button className={'check_btn'} >Go To Checkout
                                <ShoppingCartIcon style={{
                                    fontSize: 35,
                                    paddingLeft: '5px',
                                    paddingRight: '5px'
                                }} />
                                <span className={'disable-counter'}>{totalQuantity}</span>
                            </button> </NavLink>
                        </div>
                }


            </Paper>
            <Row style={{ justifyContent: "space-around" }}>
                <Col md={11}>
                    <Row >
                        {
                            menu.map((item) => {

                                const { id, name, img, price } = item;

                                return (
                                    <Col key={id} md={6}>
                                        <Row className={'shadow border-0 bg-white mr-3 mt-2'}>
                                            <Col md={7}>
                                                <div className="mt-2">
                                                    <h5>{name}</h5>
                                                    <hr />
                                                    <p className={'mt-3'}>$ {price}.00</p>
                                                    <button
                                                        onClick={() => dispatch({
                                                            type: 'ADD_TO_CART',
                                                            id: item.id,
                                                            item
                                                        })}
                                                        className={' btn-send '}>ADD TO CART</button>
                                                </div>
                                            </Col>
                                            <Col md={5} >
                                                <img className="mt-4" alt={'img'} style={{ width: "100%" }} src={img} />
                                            </Col>
                                        </Row>
                                    </Col>
                                )

                            })
                        }
                    </Row>
                </Col>
            </Row>

        </>

    );
}

export default Menu
