import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Home from "../components/Home/Home";
import Restaurant from "../components/Restaurant/Restaurant";
import About from "../components/About/About";
import Login from "../components/Login";
import Register from "../components/Register";
import Policies from "../components/Policies/Policies";
import Dessert from "../components/Categories/Dessert";
import Nav from "../Navbar/Nav";
import Footer from "../components/Footer/Footer"
import Drinks from "../components/Categories/Drinks"
import HomeCooked from "../components/Categories/HomeCooked"
import RestaurantView from '../components/Restaurant/RestaurantView';
import AddToCart from "../components/AddToCart/AddToCart";

const RouteConfig = () => {
    return (
        <>
            <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Restaurant" component={Restaurant} />
                <Route exact path="/about"  component={About}/>
                <Route exact path="/policies" component={Policies} />
                <Route exact path="/login"  component={Login}/>
                <Route exact path="/register"  component={Register}/>
                <Route exact path="/dessert" component={Dessert} />
                <Route exact path="/drinks" component={Drinks} />
                <Route exact path="/homeCooked" component={HomeCooked} />
                <Route exact path="/RestaurantView" component={RestaurantView}/>
                <Route exact path="/addToCart" component={AddToCart} />
                <Route>404 Page Not Found!</Route>
            </Switch>
            <Footer />
            </BrowserRouter>
        </>
    )
}

export default RouteConfig
