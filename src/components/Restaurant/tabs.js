import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Row, Col } from "react-bootstrap";
import Res1 from "../../assets/images/res7.jpg";
import "./restaurant.css"



function TabPanel(props) {


    const Menu = [
        {
            id: 1,
            name: "Burger",
            details: "Lorem",
            price: "$100",
            img: Res1,
        }
    ]


    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff'
    },
}));

const Menu = [
    {
        id: 1,
        name: "Chicken Burger",
        img: Res1,
        price: "$20.00"
    },
    {
        id: 2,
        name: "Zinger Burger",
        img: Res1,
        price: "$40.00"
    },
    {
        id: 3,
        name: "Quarter Broast",
        img: Res1,
        price: "$50.00"
    },
]

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="white">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="#fff"
                >
                    <Tab style={{ fontWeight: '700' }} label="Menu" {...a11yProps(0)} />
                    <Tab style={{ fontWeight: '700' }} label="Popular" {...a11yProps(1)} />
                    <Tab style={{ fontWeight: '700' }} label="Deals" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Row style={{ justifyContent: "space-around" }}>
                        <Col md={11}>
                            <Row >
                                {
                                    Menu.map((item) => {
                                        return (
                                            <Col md={6}>
                                                <Row className={'shadow border-0 bg-white mr-3 mt-2'}>
                                                    <Col md={7}>
                                                        <div className="mt-2">
                                                            <h5>{item.name}</h5>
                                                            <hr />
                                                            <p className={'mt-3'}>{item.price}</p>
                                                            <button className={' btn-send '}>ADD TO CART</button>
                                                        </div>
                                                    </Col>
                                                    <Col md={5} >
                                                        <img className="mt-4" alt={'img'} style={{ width: "100%" }} src={item.img} />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        )

                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                <Row style={{ justifyContent: "space-around" }}>
                        <Col md={11}>
                            <Row >
                                {
                                    Menu.map((item) => {
                                        return (
                                            <Col md={6}>
                                                <Row className={'shadow border-0 bg-white mr-3 mt-2'}>
                                                    <Col md={7}>
                                                        <div className="mt-2">
                                                            <h5>{item.name}</h5>
                                                            <hr />
                                                            <p className={'mt-3'}>{item.price}</p>
                                                            <button className={' btn-send '}>ADD TO CART</button>
                                                        </div>
                                                    </Col>
                                                    <Col md={5} >
                                                        <img className="mt-3 mb-3" alt={'img'} style={{ width: "100%" }} src={item.img} />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        )

                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                <Row style={{ justifyContent: "space-around" }}>
                        <Col md={11}>
                            <Row >
                                {
                                    Menu.map((item) => {
                                        return (
                                            <Col md={6}>
                                                <Row className={'shadow border-0 bg-white mr-3 mt-2'}>
                                                    <Col md={7}>
                                                        <div className="mt-2">
                                                            <h5>{item.name}</h5>
                                                            <hr />
                                                            <p className={'mt-3'}>{item.price}</p>
                                                            <button className={' btn-send '}>ADD TO CART</button>
                                                        </div>
                                                    </Col>
                                                    <Col md={5} >
                                                        <img className="mt-3 mb-3" alt={'img'} style={{ width: "100%" }} src={item.img} />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        )

                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
