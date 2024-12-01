import React from 'react';
import "./product.css"
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {Link} from "react-router-dom";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import about_s3 from "../../assets/home/home_s1_1.webp";
import shape from "../../assets/img/shape.svg";

function Product(props) {
    return (
        <div>
            <div className="contact_header">
                <div className="header_shape_top">
                    <img src={shape} alt=""/>
                </div>
                <div className="contact_opacity"></div>
                <div className="contact_header_left">
                    <h1>Product</h1>
                </div>
                <div className="contact_header_right">
                    Home | Product
                </div>
                <div className="header_shape_bottom">
                    <img src={shape} alt=""/>
                </div>
            </div>
            <section className={"product_s1 about_s2"}>
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
                        <div className="col-lg-6 about_s2_item">
                            <div className="about_s2_element_index wow animate__animated  animate__rubberBand">

                            </div>
                            <div className="about_s2_element_line">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"home_s3"}>
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
            <section className={"product_s3 home_s1"}>
                <div className="container">
                    <div className="row home_s1_box mt-5">
                        <div className="col-lg-6 home_s1_img" data-aos="fade-right">
                            <div className="home_s1_element  wow animate__animated  animate__rubberBand">

                            </div>
                            <div className="home_s1_element-blob_line wow animate__animated  animate__tada  "></div>
                            <div className="home_s1_blob"
                                 style={{background: `url(${about_s3}) no-repeat`, backgroundSize: "cover" ,
                                     backgroundPosition:"52% 75%"
                                 }}
                            >
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
        </div>
    );
}

export default Product;