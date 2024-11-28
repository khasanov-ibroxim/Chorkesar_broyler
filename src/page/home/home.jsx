import React from "react";
import "./home.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Zoom, EffectFade} from "swiper/modules";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "swiper/swiper-bundle.css";

import home_header_1 from "../../assets/home/header_1.png";
import home_header_2 from "../../assets/home/header_2.png";
import shape from "../../assets/img/shape.svg"

import home_s2 from "../../assets/home/home_s2.png"

import UnarchiveIcon from '@mui/icons-material/Unarchive';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div className={"home_page"}>
            <header className="home-header">
                <div className="header_shape_top">
                    <img src={shape} alt=""/>
                </div>
                <span className="opacity_header"></span>
                <div className="home_header_text">
                    <span>No antibiotics, no growth stimulants!</span>
                    <h1>Fresh eggs for you every day!</h1>
                    <p>From farm to table, our poultry is simply incredible!</p>
                    <Link to={"/contact"}>Contact Us</Link>
                </div>
                <Swiper
                    modules={[Autoplay, Zoom, EffectFade]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    effect={"fade"}
                    loop={true}
                    zoom={true} // Enable Zoom
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="swiper-zoom-container">
                            <img src={home_header_1} alt="Header 1" loading="lazy"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-zoom-container">
                            <img src={home_header_2} alt="Header 2" loading="lazy"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="header_shape_bottom">
                    <img src={shape} alt=""/>
                </div>
            </header>

            <section className={"home_s1"}>
                <div className="container">
                    <div className="home_s1_title">
                        <span>Welcome to our poultry farm</span>
                        <h2>We offer high-quality eggs at wholesale prices!</h2>
                        <p>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="row home_s1_box mt-5">
                        <div className="col-lg-6 home_s1_img">
                            <div className="home_s1_element wow animate__animated  animate__rubberBand" >
                                <div className="home_s1_element-blob_line"></div>
                            </div>
                            <div className="home_s1_blob" >
                            </div>

                            <div className="home_s1_element_iz"></div>
                        </div>
                        <div className="col-lg-6 home_s1_item_box">
                            <div className="home_s1_item" data-aos="fade-left">
                                <h3>We supply restaurants, cafes, bakeries, and even independent supermarkets</h3>
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

            <section className={"home_s2"}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 home_s2_text" data-aos="fade-right">
                            <h4>Providing premium poultry since 1983</h4>
                            <h1>We monitor agricultural products for customers & partners</h1>
                            <p>Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Platea dictumst
                                vestibulum rhoncus est pellentesque.</p>
                            <p>Curabitur gravida arcu ac tortor. Non consectetur a erat nam at. Facilisis magna etiam
                                tempor orci eu lobortis elementum nibh tellus. Sollicitudin aliquam ultrices sagittis
                                orci a scelerisque purus.</p>
                            <Link to={"#"}>Read About us</Link>
                        </div>
                        <div className="col-lg-6 home_s2_img" data-aos="fade-left">
                            <img src={home_s2} alt=""/>
                            <div className="home_s2_element_top">
                                <h1>Our poultry is fed an entirely vegetarian diet</h1>
                            </div>
                            <div className="home_s2_element_bottom "></div>
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

            <section className="home_s4">
                <div className="container">
                    <div className="home_s4_title">
                        <span>High-quality eggs</span>
                        <h3>Our numbers prove the constant improvement in the quality of our products</h3>
                        <p>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                    <div className="row justify-content-between">
                        <div className="col-lg-3 wow animate__animated  animate__rubberBand">
                            <div className="home_s4_item_element"></div>
                            <div className="home_s4_item " >
                                <h1>20k</h1>
                                <p>Areas</p>
                            </div>
                        </div>
                        <div className="col-lg-3 wow animate__animated  animate__rubberBand">
                            <div className="home_s4_item_element"></div>
                            <div className="home_s4_item">
                                <h1>20k</h1>
                                <p>Experience</p>
                            </div>
                        </div>
                        <div className="col-lg-3 wow animate__animated  animate__rubberBand">
                            <div className="home_s4_item_element"></div>
                            <div className="home_s4_item">
                                <h1>20k</h1>
                                <p>Products</p>
                            </div>
                        </div>
                        <div className="col-lg-3 wow animate__animated  animate__rubberBand">
                            <div className="home_s4_item_element"></div>
                            <div className="home_s4_item">
                                <h1>20k</h1>
                                <p>Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={'home_s5'}>
                <div className="home_s3_element_top"></div>
                <div className="container">
                    <div className="home_s5_title">
                        <span>Our gallery</span>
                        <h1>Get to know our farm</h1>
                    </div>
                    <div className="gallery-container">
                        <div className="gallery-item">
                            <img src={home_s2} alt=""/>
                        </div>
                        <div className="gallery-item">
                            <img src={home_s2} alt=""/>
                        </div>
                        <div className="gallery-item">
                            <img src={home_s2} alt=""/>
                        </div>
                        <div className="gallery-item">
                            <img src={home_s2} alt=""/>
                        </div>
                        <div className="gallery-item">
                            <img src={home_s2} alt=""/>
                        </div>
                        <div className="gallery-item">
                            <img src={home_s2} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="home_s3_element_bottom"></div>
            </section>

            <section className={"home_s6"}>
                <div className="home_s6_opacity"></div>
                <div className="home_s3_element_top"></div>
                <div className="home_s3_element_bottom"></div>
            </section>

            <section className={'home_s7'}>
                <div className="container">
                    <div className="home_s7_title">
                        <div className="home_s7_title_text" data-aos="fade-right">
                            <span>Our blog</span>
                            <h3>Latest news</h3>
                        </div>
                        <Link to={"#"} data-aos="fade-left">MORE POSTS</Link>
                    </div>

                    <div className="row">
                        <div data-aos="fade-right" className="col-lg-4 home_s7_item">
                            <div className="home_s7_item_img">
                                <img src={home_s2} alt=""/>
                            </div>
                            <div className="home_s7_item_text">
                                <h4>Optimal water consumption rate for layers and broilers</h4>
                                <p>Iaculis at erat pellentesque adipiscing commodo elit. In tellus integer feugiat
                                    scelerisque varius morbi enim nunc. Cras pulvinar mattis nunc sed blandit libero
                                    volutpat sed</p>
                                <Link to={"#"}>Read More <DoubleArrowIcon/></Link>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-lg-4 home_s7_item">
                            <div className="home_s7_item_img">
                                <img src={home_s2} alt=""/>
                            </div>
                            <div className="home_s7_item_text">
                                <h4>Optimal water consumption rate for layers and broilers</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque dolorum eos eveniet
                                    itaque. Atque corporis magnam officia quasi. A ad amet asperiores atque corporis
                                    deleniti eaque enim error esse harum, illum labore laboriosam magnam minima minus
                                    nihil nisi officia quaerat quia repellat repellendus saepe sit temporibus ut velit
                                    voluptates voluptatum! Accusantium ad corporis doloribus qui. Ab ad asperiores at
                                    atque consectetur corporis, cum debitis, dicta eos exercitationem facilis molestiae
                                    natus necessitatibus numquam officia possimus quidem recusandae sapiente tenetur
                                    totam!</p>
                                <Link to={"#"}>Read More <DoubleArrowIcon/></Link>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-lg-4 home_s7_item">
                            <div className="home_s7_item_img">
                                <img src={home_s2} alt=""/>
                            </div>
                            <div className="home_s7_item_text">
                                <h4>Optimal water consumption rate for layers and broilers</h4>
                                <p>Iaculis at erat pellentesque adipiscing commodo elit. In tellus integer feugiat
                                    scelerisque varius morbi enim nunc. Cras pulvinar mattis nunc sed blandit libero
                                    volutpat sed</p>
                                <Link to={"#"}>Read More <DoubleArrowIcon/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"home_s8"}>
                <div className="container">
                    <div className="home_s8_box">
                        <div className="home_s8_box_element_top wow animate__animated  animate__rubberBand"></div>
                        <div className="home_s8_box_item">
                            <div className="home_s8_box_item_text">
                                <h2>We supply fresh products to your business</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                    ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                            <Link to={"#"}>CONTACT US</Link>
                        </div>
                        <div className="home_s8_box_element_bottom"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
