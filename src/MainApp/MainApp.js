import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { VendorLayoutPath, AdminLayoutPath } from "../Routes/Routes";
import VendorDashboardRoute from "../layout/VendorDashboard/VendorDashboard";
import AdminDashboardRoute from "../layout/AdminDashboard/AdminDashboard";
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
import ProductContextProvider from '../components/GlobalStore/ProductContext';
import CartContextProvider from '../components/GlobalStore/CartContext';


if (window.location.href.toString().includes('vendor') && !window.location.href.toString().includes('register') && !window.location.href.includes('login')) {
    import('../assets/dashboard/scss/reactifyCss')
}

if (window.location.href.toString().includes('admin') && !window.location.href.toString().includes('register') && !window.location.href.includes('login')) {
    import('../assets/dashboard/scss/reactifyCss')
}

const RouteConfig = () => {


    const adminLayoutRoute = AdminLayoutPath && AdminLayoutPath.map((route, key) =>
        <AdminDashboardRoute key={key} path={`/admin/${route.path}`} component={route.component} />
    )
    const vendorLayoutRoute = VendorLayoutPath && VendorLayoutPath.map((route, key) =>
        <VendorDashboardRoute key={key} path={`/vendor/${route.path}`} component={route.component} />
    )

    return (
        <>
            <ProductContextProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        {/* <Nav /> */}
                        <Switch>
                            {adminLayoutRoute}
                            {vendorLayoutRoute}
                            <Route exact path="/" component={Home} />
                            <Route exact path="/Restaurant" component={Restaurant} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/policies" component={Policies} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/dessert" component={Dessert} />
                            <Route exact path="/drinks" component={Drinks} />
                            <Route exact path="/homeCooked" component={HomeCooked} />
                            <Route exact path="/RestaurantView" component={RestaurantView} />
                            <Route exact path="/addToCart" component={AddToCart} />
                            {/* <Route>404 Page Not Found!</Route> */}
                        </Switch>
                        {/* <Footer /> */}
                    </BrowserRouter>
                </CartContextProvider>
            </ProductContextProvider>
        </>
    )
}

export default RouteConfig
