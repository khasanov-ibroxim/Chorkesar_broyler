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

function Product(props) {
    return (
        <div>
            <div className="contact_header">

                <div className="contact_opacity"></div>
                <div className="contact_header_left">
                    <h1>Продукция</h1>
                </div>
                <div className="contact_header_right">
                    Главная/Продукция
                </div>
            </div>
            <section className={"product_s1 about_s2"}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="about_s2_title">
                                <span>Идеальное мясо от заботливых фермеров</span>
                                <h2>Наши бройлеры — это высококачественное мясо, выращенное с заботой о каждом этапе
                                    производства. </h2>
                                <p>Мы тщательно следим за условиями кормления и содержания птицы, чтобы
                                    обеспечить наилучший вкус и текстуру мяса.</p>
                            </div>
                            <div className="about_s2_text">
                                <ul>
                                    <li>Особенности бройлеров:</li>
                                    <li>
                                        <CheckCircleIcon/>
                                        Качество мяса: нежное и сочное.
                                    </li>
                                    <li>
                                        <CheckCircleIcon/>
                                        Высокая пищевая ценность.
                                    </li>
                                    <li>
                                        <CheckCircleIcon/>
                                        Экологичное кормление, без гормонов роста.
                                        Продукция
                                    </li>
                                </ul>
                                <Link to={"/product"}>Продукция</Link>
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
                                <h4>Исключительное Качество</h4>
                                <p>Каждая птица получает должный уход и питание, что делает мясо особенно нежным и
                                    сочным. Мы уверены, что наши бройлеры — лучший выбор для вашего стола.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={vkus}/>
                            </div>
                            <div className="home_s3_text">
                                <h4>Натуральный вкус</h4>
                                <p>Мы используем только экологически чистые корма, что позволяет добиться идеального
                                    вкуса и сохранить все полезные свойства мяса.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={virashvnya} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>Природное выращивание</h4>
                                <p>Каждая птица выращивается в условиях, максимально приближенных к природным. Это
                                    помогает обеспечить не только высокое качество мяса, но и гарантирует безопасность
                                    продукции для вашего здоровья и здоровья ваших близких.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={garantiya} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>Гарантия свежести</h4>
                                <p>Каждая порция мяса, поступающая к вам, свежая, нежная и готова порадовать вас своим
                                    неповторимым вкусом.</p>
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
                                <span style={{textAlign:"center" , width:"100%"}}>Яйца, полные природы и пользы</span>
                                <h2 style={{textAlign:"center"}}>Наши яйца — это продукт высшего качества, полученный от здоровых кур, которые
                                    питаются натуральным кормом. </h2>
                                <p style={{textAlign:"center"}}>Они отличаются не только вкусом, но и высоким
                                    содержанием питательных веществ.</p>
                                <p>Преимущества наших яиц:</p>
                            </div>

                            <div className="home_s1_item">
                                <h3>Высокое содержание витаминов и минералов.</h3>
                            </div>
                            <div className="home_s1_item">
                                <h3>Продукт с минимальной обработкой.</h3>
                            </div>
                            <div className="home_s1_item">
                                <h3>Яйца с ярким желтком и плотным белком.</h3>
                            </div>

                            <Link to={"/contact"} onClick={()=>{window.scroll(top)}}>Контакты</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Product;