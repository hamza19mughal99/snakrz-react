import React from 'react'
import "../assets/css/style.css";
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const Homesection = () => {
    return (
        <>
            <div className="main-homeSection">
                <section className="banner-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="heading-text">
                                    <h1>Discover the best food & drinks in Abcd, KS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="filter-section">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12">
                                <div className="card form-section-card ">
                                    <form action="" className="">
                                        <div className="form-row align-items-center">

                                            <div className="col-md-4 icon-box">
                                                <span className="fa-map-marker-alt"><FaMapMarkerAlt /> </span>

                                                <input className="form-control" list="datalistOptions" id="exampleDataList"
                                                    placeholder="Restuarant" />

                                                <datalist id="datalistOptions">
                                                    <option value="San Francisco" />
                                                    <option value="New York" />
                                                    <option value="Seattle" />
                                                    <option value="Los Angeles" />
                                                    <option value="Chicago" />
                                                </datalist>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="input-group">
                                                    <button type="button" className="btn-primary">
                                                        <span className="fas fa-search"><FaSearch /> </span>
                                                    </button>
                                                    <div className="form-outline">
                                                        <input type="search" id="form1" className="form-control"
                                                            placeholder="Location area, Zip code, Postal code" />

                                                    </div>

                                                </div>
                                                {/* <button type="button" className="btn btn-lg btn-block btn-custom btn-search" onclick="">search</button> */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Homesection
