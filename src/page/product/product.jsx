import React from 'react';
import "./product.css"
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {Link} from "react-router-dom";

import product_1 from "../../assets/product/product_2.jpg"
import product_2 from "../../assets/product/product_1.jpg"

import garantiya from "../../assets/icon/garantiya.png"
import kachestva from "../../assets/icon/kachestva.png"
import virashvnya from "../../assets/icon/virashvnya.png"
import vkus from "../../assets/icon/vkus.png"
import {useTranslation} from "react-i18next";
import ProductMetaTags from "../../component/helment/ProductMetaTags.jsx";

function Product(props) {
    const {t} = useTranslation()
    return (
        <div>
            <ProductMetaTags/>
            <div className="contact_header">

                <div className="contact_opacity"></div>
                <div className="contact_header_left">
                    <h1>{t("products.product_header.left")}</h1>
                </div>
                <div className="contact_header_right">
                    {t("products.product_header.right")}
                </div>
            </div>
            <section className={"product_s1 about_s2"}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="about_s2_title">
                                <span>{t("products.product_s1.title_span")}</span>
                                <h2>{t("products.product_s1.title_h2")}</h2>
                                <p>{t("products.product_s1.title_p")}</p>
                            </div>
                            <div className="about_s2_text">
                                <ul>
                                    <li>{t("products.product_s1.item_1")}</li>
                                    <li>
                                        <CheckCircleIcon/>
                                        {t("products.product_s1.item_2")}
                                    </li>
                                    <li>
                                        <CheckCircleIcon/>
                                        {t("products.product_s1.item_3")}
                                    </li>
                                    <li>
                                        <CheckCircleIcon/>
                                        {t("products.product_s1.item_4")}
                                    </li>
                                </ul>
                                <Link to={"/product"}>{t("products.product_s1.link")}</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 about_s2_item">
                            <div className="about_s2_element_index wow animate__animated  animate__rubberBand"
                            style={{backgroundImage:`url(${product_2})` , backgroundPosition:"center"}}
                            >

                            </div>
                            <div className="about_s2_element_line">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"about_s5 home_s3"}>
                <div className="home_s3_element_top"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={kachestva}/>
                            </div>
                            <div className="home_s3_text">
                                <h4>{t("products.product_s2.item_1.h4")}</h4>
                                <p>{t("products.product_s2.item_1.p")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={vkus}/>
                            </div>
                            <div className="home_s3_text">
                                <h4>{t("products.product_s2.item_2.h4")}</h4>
                                <p>{t("products.product_s2.item_2.p")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={virashvnya} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>{t("products.product_s2.item_3.h4")}</h4>
                                <p>{t("products.product_s2.item_3.p")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={garantiya} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>{t("products.product_s2.item_4.h4")}</h4>
                                <p>{t("products.product_s2.item_4.p")}</p>
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
                                 style={{
                                     background: `url(${product_1}) no-repeat`, backgroundSize: "cover",
                                     backgroundPosition: "4% 75%"
                                 }}
                            >
                            </div>

                            <div className="home_s1_element_iz"></div>
                        </div>
                        <div className="col-lg-6 home_s1_item_box" data-aos="fade-left">
                            <div className="home_s1_title">
                                <span style={{textAlign:"center" , width:"100%"}}>{t("products.product_s3.title_span")}</span>
                                <h2 style={{textAlign:"center"}}>{t("products.product_s3.title_h2")}</h2>
                                <p style={{textAlign:"center"}}>{t("products.product_s3.title_p")}</p>
                                <p>{t("products.product_s3.title_p1")}</p>
                            </div>

                            <div className="home_s1_item">
                                <h3>{t("products.product_s3.item_1")}</h3>
                            </div>
                            <div className="home_s1_item">
                                <h3>{t("products.product_s3.item_2")}</h3>
                            </div>
                            <div className="home_s1_item">
                                <h3>{t("products.product_s3.item_3")}</h3>
                            </div>

                            <Link to={"/contact"} onClick={()=>{window.scroll(top)}}>{t("products.product_s3.link")}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Product;