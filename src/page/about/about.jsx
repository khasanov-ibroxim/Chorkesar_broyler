import React, {useState} from 'react';
import "./about.css"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import shape from "../../assets/img/shape.svg";
import {Link} from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import about_header from "../../assets/about/about_header.jpg"
import about_s1 from "../../assets/about/about_s1_img.webp"
import about_s3 from "../../assets/about/about_s3.jpg"
import about_s4 from "../../assets/about/about_s4.jpg"

import about_s5_istorya from "../../assets/icon/istorya.png"
import about_s5_napravleniya from "../../assets/icon/napravleniya.png"
import about_s5_sistema from "../../assets/icon/sistema.png"
import about_s5_spetsalist from "../../assets/icon/spetsalisti.png"
import {Image} from "antd";

import sertefikat_1 from "../../assets/about/sertefikat_1.jpg"
import sertefikat_2 from "../../assets/about/sertefikat_2.jpg"
import sertefikat_3 from "../../assets/about/sertefikat_3.jpg"
import sertefikat_4 from "../../assets/about/sertefikat_4.jpg"
import {useTranslation} from "react-i18next";
import AboutMetaTags from "../../component/helment/AboutMetaTags.jsx";

function About(props) {
    const {t} = useTranslation()
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <AboutMetaTags/>
            <div className="contact_header" style={{background: `url(${about_header}) no-repeat center center`, backgroundSize: 'cover'}}>

                <div className="contact_opacity"></div>
                <div className="contact_header_left">
                    <h1>{t("about.about_header.left")}</h1>
                </div>
                <div className="contact_header_right">
                    {t("about.about_header.right")}
                </div>

            </div>
            <section className={"home_s1 about_s1"}>
                <div className="container">
                    <div className="home_s1_title">
                        <span>{t("about.about_s1.title_span")}</span>
                        <h2>{t("about.about_s1.title_h2")}</h2>
                        <p>{t("about.about_s1.title_p")}</p>
                    </div>
                    <div className="row home_s1_box mt-5">
                        <div className="col-lg-6 home_s1_img">
                            <div className="home_s1_element  wow animate__animated  animate__rubberBand">
                                <div className="home_s1_element-blob_line"></div>
                            </div>
                            <div className="home_s1_blob"
                                 style={{
                                     background: `url(${about_s1}) no-repeat`, backgroundPosition: "33% 63%",
                                     backgroundSize: "cover"
                                 }}>
                            </div>

                            <div className="home_s1_element_iz"></div>
                        </div>
                        <div className="col-lg-6 home_s1_item_box">
                            <div className="home_s1_item" data-aos="fade-right">
                                <h3>{t("about.about_s1.item_1.h3")}</h3>
                                <p>{t("about.about_s1.item_1.p")}</p>
                            </div>
                            <div className="home_s1_item" data-aos="fade-right">
                                <h3>{t("about.about_s1.item_2")}</h3>
                            </div>
                            <div className="home_s1_item_sertefication" data-aos="fade-right">
                                <button onClick={() => setVisible(true)}>{t("about.about_s1.item_3")}</button>
                            </div>
                            <div className="home_s1_item_tell" data-aos="fade-right">
                                <span><LocalPhoneIcon/></span>
                                <div className="home_s1_item_tell_text">
                                    <h2>{t("about.about_s1.item_4")}</h2>
                                    <h3>+998 99 123 32 32</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Image.PreviewGroup
                style={{display: 'none',}}
                preview={{
                    visible,
                    onVisibleChange: (value) => {
                        setVisible(value);
                    },
                }}
            >
                <Image src={sertefikat_1} style={{display: 'none',}}/>
                <Image src={sertefikat_2} style={{display: 'none',}}/>
                <Image src={sertefikat_3} style={{display: 'none',}}/>
                <Image src={sertefikat_4} style={{display: 'none',}}/>
            </Image.PreviewGroup>

            <section className={"about_s2"}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="about_s2_title">
                                <span>{t("about.about_s2.title_span")}</span>
                                <h2>{t("about.about_s2.title_h2")}</h2>
                                <p>{t("about.about_s2.title_p")}</p>
                            </div>
                            <div className="about_s2_text">
                                <ul>
                                    <li>
                                        <CheckCircleIcon/>
                                        {t("about.about_s2.item_1")}
                                    </li>
                                    <li>
                                        <CheckCircleIcon/>
                                        {t("about.about_s2.item_2")}
                                    </li>
                                    <li>
                                        <CheckCircleIcon/>
                                        {t("about.about_s2.item_3")}
                                    </li>
                                </ul>
                                <Link to={"/product"} onClick={() => {
                                    window.scroll(top)
                                }}>{t("about.about_s2.link")}</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 about_s2_item" data-aos="fade-right">
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
                                 style={{
                                     background: `url(${about_s3}) no-repeat`, backgroundSize: "100%",
                                     backgroundPosition: "left"
                                 }}>
                            </div>

                            <div className="home_s1_element_iz"></div>
                        </div>
                        <div className="col-lg-6 home_s1_item_box" data-aos="fade-right">
                            <div className="home_s1_title">
                                <span style={{textAlign:"center" , width:"100%"}}>{t("about.about_s3.title_span")}</span>
                                <h2>{t("about.about_s3.title_h2")}</h2>
                                <p>{t("about.about_s3.title_p")}</p>
                            </div>
                            <div className="home_s1_item">
                                <h3>{t("about.about_s3.h3")}</h3>
                            </div>

                            <Link to={"/contact"}>{t("about.about_s3.link")}</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"about_s4 home_s6"}
                     style={{background: `url(${about_s4}) no-repeat center center`, backgroundSize: 'cover'}}>
                <div className="home_s6_opacity"></div>
                <div className="home_s3_element_top"></div>
            </section>

            <section className={"about_s5 home_s3"}>
                <div className="home_s3_element_top"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={about_s5_istorya}/>
                            </div>
                            <div className="home_s3_text">
                                <h4>{t("about.about_s5.item_1.h4")}</h4>
                                <p>{t("about.about_s5.item_1.p")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={about_s5_napravleniya}/>
                            </div>
                            <div className="home_s3_text">
                                <h4>{t("about.about_s5.item_2.h4")}</h4>
                                <p>{t("about.about_s5.item_2.p")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={about_s5_sistema} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>{t("about.about_s5.item_3.h4")}</h4>
                                <p>{t("about.about_s5.item_3.p")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={about_s5_spetsalist} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>{t("about.about_s5.item_4.h4")}</h4>
                                <p>{t("about.about_s5.item_4.p")}</p>
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