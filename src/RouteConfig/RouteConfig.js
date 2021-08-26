import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Home from "../components/Home";
import Restaurant from "../components/Restaurant";
import About from "../components/About";
import Login from "../components/Login";
import Register from "../components/Register";
import Policies from "../components/Policies";
import Seller from "../components/Seller";
import Dessert from "../components/Dessert";
import Nav from "../components/Nav";
import Footer from "../components/Footer"
import Drinks from "../components/Drinks"
import HomeCooked from "../components/HomeCooked"


const RouteConfig = () => {
    return (
        <>
            <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Restaurant" component={Restaurant} />
                <Route exact path="/About"  component={About}/>
                <Route exact path="/Policies" component={Policies} />
                <Route exact path="/Login"  component={Login}/>
                <Route exact path="/Register"  component={Register}/>
                <Route exact path="/Seller" component={Seller} />
                <Route exact path="/Dessert" component={Dessert} />
                <Route exact path="/Drinks" component={Drinks} />
                <Route exact path="/HomeCooked" component={HomeCooked} />
            </Switch>
            <Footer />
            </BrowserRouter>
        </>
    )
}

export default RouteConfig
