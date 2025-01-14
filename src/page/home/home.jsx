import React from "react";
import "./home.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Zoom, EffectFade} from "swiper/modules";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "swiper/swiper-bundle.css";

import home_header_1 from "../../assets/home/home_header.jpg";
import home_header_2 from "../../assets/home/home_header2.jpg";
import shape from "../../assets/img/shape.svg"

import home_s1 from "../../assets/home/home_s1.jpg"
import home_s2 from "../../assets/home/home_s2.jpg"
import {Image} from "antd";
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {Link} from "react-router-dom";
import {EyeOutlined} from "@ant-design/icons";
import home_s3_sveji from "../../assets/icon/sveji.png"
import home_s3_kantrol from "../../assets/icon/kantrol.png"
import home_s3_texnalogiya from "../../assets/icon/texnalogiya.png"
import home_s3_eko from "../../assets/icon/eko.png"
import home_s6 from "../../assets/home/home_s6.jpg"

import gallery_1 from "../../assets/home/galarey/gallery_1.jpg"
import gallery_2 from "../../assets/home/galarey/gallery_2.jpg"
import gallery_3 from "../../assets/home/galarey/gallery_3.jpg"
import gallery_4 from "../../assets/home/galarey/gallery_4.jpg"
import gallery_5 from "../../assets/home/galarey/gallery_5.jpg"
import gallery_6 from "../../assets/home/galarey/gallery_6.jpg"
import {useTranslation} from "react-i18next";


function Home(props) {
    const {t} = useTranslation();
    return (
        <div className={"home_page"}>
            <header className="home-header">

                <span className="opacity_header"></span>
                <div className="home_header_text">
                    <span>{t("home.home_header.span")}</span>
                    <h1>{t("home.home_header.h1")}</h1>
                    <p>{t("home.home_header.p")}</p>
                    <Link to={"/contact"}>{t("contacts")}</Link>
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
            </header>

            <section className={"home_s1"}>
                <div className="container">
                    <div className="home_s1_title">
                        <span>{t("home.home_s1.title_span")}</span>
                        <h2>{t("home.home_s1.title_h2")}</h2>
                        <p>{t("home.home_s1.title_p")}</p>
                    </div>
                    <div className="row home_s1_box mt-5">
                        <div className="col-lg-6 home_s1_img">
                            <div className="home_s1_element wow animate__animated  animate__rubberBand">
                                <div className="home_s1_element-blob_line"></div>
                            </div>
                            <div className="home_s1_blob" style={{backgroundImage: `url(${home_s1})`}}>
                            </div>

                            <div className="home_s1_element_iz"></div>
                        </div>
                        <div className="col-lg-6 home_s1_item_box">
                            <div className="home_s1_item" data-aos="fade-left">
                                <h3>{t("home.home_s1.item_1.h3")}</h3>
                                <p>{t("home.home_s1.item_1.p")}</p>
                            </div>
                            <div className="home_s1_item" data-aos="fade-left">
                                <h3>{t("home.home_s1.item_2")}</h3>
                            </div>
                            <div className="home_s1_item_tell" data-aos="fade-left">
                                <span><LocalPhoneIcon/></span>
                                <div className="home_s1_item_tell_text">
                                    <h2>{t("home.home_s1.item_3")}</h2>
                                    <h3>+998 94 158 52 00</h3>
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
                            <h4>{t("home.home_s2.title_h4")}</h4>
                            <h1>{t("home.home_s2.title_h1")}</h1>
                            <p>{t("home.home_s2.p_1")}</p>
                            <p>{t("home.home_s2.p_2")}</p>
                            <Link to={"/about"} onClick={() => {
                                window.scroll(top)
                            }}>{t("home.home_s2.link")}</Link>
                        </div>
                        <div className="col-lg-6 home_s2_img" data-aos="fade-left">
                            <img src={home_s2} alt=""/>
                            <div className="home_s2_element_top">
                                <h1>{t("home.home_s2.element")}</h1>
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
                                <img src={home_s3_sveji} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>{t("home.home_s3.item_1.h4")}</h4>
                                <p>{t("home.home_s3.item_1.p")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={home_s3_kantrol} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>{t("home.home_s3.item_2.h4")}</h4>
                                <p dangerouslySetInnerHTML={{__html: t("home.home_s3.item_2.p")}}></p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={home_s3_texnalogiya} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>{t("home.home_s3.item_3.h4")}</h4>
                                <p dangerouslySetInnerHTML={{__html: t("home.home_s3.item_3.p")}}></p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={home_s3_eko} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>{t("home.home_s3.item_4.h4")}</h4>
                                <p>{t("home.home_s3.item_4.p")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_s3_element_bottom"></div>
            </section>

            <section className="home_s4">
                <div className="container">
                    <div className="home_s4_title">
                        <span>{t("home.home_s4.title_span")}</span>
                        <h3>{t("home.home_s4.title_h3")}</h3>
                        <p>{t("home.home_s4.title_p")}</p>
                    </div>

                    <div className="row justify-content-between">
                        <div className="col-lg-3 wow animate__animated  animate__rubberBand">
                            <div className="home_s4_item_element"></div>
                            <div className="home_s4_item ">
                                <p>{t("home.home_s4.item_1.p")}</p>
                                <h1>{t("home.home_s4.item_1.h1")}</h1>
                                <p>{t("home.home_s4.count")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 wow animate__animated  animate__rubberBand">
                            <div className="home_s4_item_element"></div>
                            <div className="home_s4_item">
                                <p>{t("home.home_s4.item_2.p")}</p>
                                <h1>{t("home.home_s4.item_2.h1")}</h1>
                                <p>{t("home.home_s4.count")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 wow animate__animated  animate__rubberBand">
                            <div className="home_s4_item_element"></div>
                            <div className="home_s4_item">
                                <p>{t("home.home_s4.item_3.p")}</p>
                                <h1>{t("home.home_s4.item_3.h1")}</h1>
                                <p>{t("home.home_s4.item_3.count")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 wow animate__animated  animate__rubberBand">
                            <div className="home_s4_item_element"></div>
                            <div className="home_s4_item">
                                <p>{t("home.home_s4.item_4.p")}</p>
                                <h1>{t("home.home_s4.item_4.h1")}</h1>
                                <p>{t("home.home_s4.item_4.count")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={'home_s5'}>
                <div className="home_s3_element_top"></div>
                <div className="container">
                    <div className="home_s5_title">
                        <span>{t("home.home_s5.title_span")}</span>
                        <h1>{t("home.home_s5.title_h1")}</h1>
                    </div>
                    <div className="gallery-container">
                        <div className="gallery-item">
                            <Image src={gallery_1} alt=""
                                   preview={{
                                       mask: <div className={"preview_box"}><EyeOutlined/> <span>{t("home.home_s5.view")}</span>
                                       </div>
                                   }}
                            />
                        </div>
                        <div className="gallery-item">
                            <Image src={gallery_2} alt=""
                                   preview={{
                                       mask: <div className={"preview_box"}><EyeOutlined/> <span>{t("home.home_s5.view")}</span>
                                       </div>
                                   }}
                            />
                        </div>
                        <div className="gallery-item">
                            <Image src={gallery_3} alt=""
                                   preview={{
                                       mask: <div className={"preview_box"}><EyeOutlined/> <span>{t("home.home_s5.view")}</span>
                                       </div>
                                   }}
                            />
                        </div>
                        <div className="gallery-item">
                            <Image src={gallery_4} alt=""
                                   preview={{
                                       mask: <div className={"preview_box"}><EyeOutlined/> <span>{t("home.home_s5.view")}</span>
                                       </div>
                                   }}
                            />
                        </div>
                        <div className="gallery-item">
                            <Image src={gallery_5} alt=""
                                   preview={{
                                       mask: <div className={"preview_box"}><EyeOutlined/> <span>{t("home.home_s5.view")}</span>
                                       </div>
                                   }}
                            />
                        </div>
                        <div className="gallery-item">
                            <Image src={gallery_6} alt=""
                                   preview={{
                                       mask: <div className={"preview_box"}><EyeOutlined/> <span>{t("home.home_s5.view")}</span>
                                       </div>
                                   }}
                            />
                        </div>
                    </div>
                </div>
                <div className="home_s3_element_bottom"></div>
            </section>

            <section className={"home_s6"} style={{background: `url(${home_s6}) no-repeat center center`, backgroundSize: "cover"}}>
                <div className="home_s6_opacity"></div>
                <div className="home_s3_element_top"></div>
                <div className="home_s3_element_bottom"></div>
            </section>

            <section className={'home_s7'}>
                <div className="container">
                    <div className="home_s7_title">
                        <div className="home_s7_title_text" data-aos="fade-up">
                            <span>{t("home.home_s7.title_span")}</span>
                            <h3>{t("home.home_s7.title_h3")}</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div data-aos="fade-right" className="col-lg-4 home_s7_item">
                            <div className="home_s7_item_img">
                                <img src={home_header_1} alt=""/>
                            </div>
                            <div className="home_s7_item_text">
                                <h4>{t("home.home_s7.item_1.h4")}</h4>
                                <p>{t("home.home_s7.item_1.p")}</p>
                                <Link to={"/product"} onClick={() => window.scrollTo(0, 0)}>{t("home.home_s7.link")}<DoubleArrowIcon/></Link>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-lg-4 home_s7_item">
                            <div className="home_s7_item_img">
                                <img src={home_header_2} alt=""/>
                            </div>
                            <div className="home_s7_item_text">
                                <h4>{t("home.home_s7.item_2.h4")}</h4>
                                <p>{t("home.home_s7.item_2.p")}</p>
                                <Link to={"/product"} onClick={() => window.scrollTo(0, 0)}>{t("home.home_s7.link")}<DoubleArrowIcon/></Link>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-lg-4 home_s7_item">
                            <div className="home_s7_item_img">
                                <img src={home_header_1} alt=""/>
                            </div>
                            <div className="home_s7_item_text">
                                <h4>{t("home.home_s7.item_3.h4")}</h4>
                                <p>{t("home.home_s7.item_3.p")}</p>
                                <Link to={"/product"} onClick={() => window.scrollTo(0, 0)}>{t("home.home_s7.link")}<DoubleArrowIcon/></Link>
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
                                <h2>{t("home.home_s8.h2")}</h2>
                                <p>{t("home.home_s8.p")}</p>
                            </div>
                            <Link to={"/contact"} onClick={() => {
                                window.scroll(top)
                            }}>{t("home.home_s8.link")}</Link>
                        </div>
                        <div className="home_s8_box_element_bottom"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
