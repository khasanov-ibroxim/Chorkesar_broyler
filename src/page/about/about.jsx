import React from 'react';
import "./about.css"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import shape from "../../assets/img/shape.svg";
import {Link} from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import about_s1 from "../../assets/about/about_s1_img.png"
import about_s3 from "../../assets/about/about_s3_img.png"
import UnarchiveIcon from "@mui/icons-material/Unarchive";

function About(props) {
    return (
        <div>
            <div className="contact_header">
                <div className="header_shape_top">
                    <img src={shape} alt=""/>
                </div>
                <div className="contact_opacity"></div>
                <div className="contact_header_left">
                    <h1>About Us</h1>
                </div>
                <div className="contact_header_right">
                    Home | About Us
                </div>
                <div className="header_shape_bottom">
                    <img src={shape} alt=""/>
                </div>
            </div>
            <section className={"home_s1 about_s1"}>
                <div className="container">
                    <div className="home_s1_title">
                        <span>We prioritize poultry welfare</span>
                        <h2>We offer healthy & natural poultry such as chickens & turkeys</h2>
                        <p>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="row home_s1_box mt-5" >
                        <div className="col-lg-6 home_s1_img">
                            <div className="home_s1_element  wow animate__animated  animate__rubberBand">
                                <div className="home_s1_element-blob_line"></div>
                            </div>
                            <div className="home_s1_blob"
                                 style={{background: `url(${about_s1})`, backgroundPosition: "33% 63%"}}>
                            </div>

                            <div className="home_s1_element_iz"></div>
                        </div>
                        <div className="col-lg-6 home_s1_item_box">
                            <div className="home_s1_item" data-aos="fade-left">
                                <h3>We invest in modern facilities and technologies for optimal bird care</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                    ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                            <div className="home_s1_item" data-aos="fade-left">
                                <h3>We promise you a reliable delivery of quality eggs at wholesale prices</h3>
                            </div>
                            <div className="home_s1_item_tell" data-aos="fade-left">
                                <span><LocalPhoneIcon/></span>
                                <div className="home_s1_item_tell_text">
                                    <h2>How can I place an order?</h2>
                                    <h3>+998 99 123 32 32</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"about_s2"}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="about_s2_title">
                                <span>Big, fat, tasty franks</span>
                                <h2>We are prepared to raise new flocks in our homes even before the chicks hatch</h2>
                                <p>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                            <div className="about_s2_text">
                                <ul>
                                    <li>
                                        <CheckCircleIcon/>
                                        We have more than 50 partner restaurants and participate in several farmers'
                                        markets.
                                    </li>
                                    <li>
                                        <CheckCircleIcon/>
                                        Enjoy high-quality poultry on your table with our specially cared-for poultry
                                        farm.
                                    </li>
                                </ul>
                                <Link to={"#"}>See our Products</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 about_s2_item" data-aos="fade-left">
                            <div className="about_s2_element_index wow animate__animated  animate__rubberBand">

                            </div>
                            <div className="about_s2_element_line ">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"home_s1 about_s3"}>
                <div className="container">
                    <div className="row home_s1_box mt-5">
                        <div className="col-lg-6 home_s1_img" data-aos="fade-right">
                            <div className="home_s1_element  wow animate__animated  animate__rubberBand">

                            </div>
                            <div className="home_s1_element-blob_line"></div>
                            <div className="home_s1_blob"
                                 style={{background: `url(${about_s3})`, backgroundSize: "cover"}}>
                            </div>

                            <div className="home_s1_element_iz"></div>
                        </div>
                        <div className="col-lg-6 home_s1_item_box" data-aos="fade-left">
                            <div className="home_s1_title">
                                <span>Healthy & happy</span>
                                <h2>All of our birds have free access to nests, perches, scratch areas to dust bathe,
                                    water, and feed</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                    ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>

                            <div className="home_s1_item">
                                <h3>We are a family-owned business that has been supplying quality poultry since
                                    1983</h3>
                            </div>

                            <Link to={"#"}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"about_s4 home_s6"}>
                <div className="home_s6_opacity"></div>
                <div className="home_s3_element_top"></div>
            </section>
            <section className={"about_s5 home_s3"}>
                <div className="home_s3_element_top"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <UnarchiveIcon/>
                            </div>
                            <div className="home_s3_text">
                                <h4>Products Range</h4>
                                <p>Felis bibendum ut tristique et egestas quis. Risus nullam eget felis eget.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <UnarchiveIcon/>
                            </div>
                            <div className="home_s3_text">
                                <h4>Quality Matters</h4>
                                <p>Felis bibendum ut tristique et egestas quis. Risus nullam eget felis eget.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <UnarchiveIcon/>
                            </div>
                            <div className="home_s3_text">
                                <h4>Satisfaction</h4>
                                <p>Felis bibendum ut tristique et egestas quis. Risus nullam eget felis eget.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <UnarchiveIcon/>
                            </div>
                            <div className="home_s3_text">
                                <h4>Free Shipping</h4>
                                <p>Felis bibendum ut tristique et egestas quis. Risus nullam eget felis eget.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_s3_element_bottom"></div>
            </section>
        </div>
    );
}

export default About;