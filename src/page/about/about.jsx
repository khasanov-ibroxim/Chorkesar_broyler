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

function About(props) {

    const [visible, setVisible] = useState(false);

    return (
        <div>
            <div className="contact_header" style={{
                background:`url(${about_header}) no-repeat center center`,
                backgroundSize:'cover'
            }}>

                <div className="contact_opacity"></div>
                <div className="contact_header_left">
                    <h1>О нас</h1>
                </div>
                <div className="contact_header_right">
                    Главная | О нас
                </div>

            </div>
            <section className={"home_s1 about_s1"}>
                <div className="container">
                    <div className="home_s1_title">
                        <span>С любовью к каждой курочке и вашему столу</span>
                        <h2>CHORKESAR БРОЙЛЕР - ЛИДЕР В ПРОИЗВОДСТВЕ КУРИНОГО МЯСА </h2>
                        <p>Качество, которое чувствуешь с первого кусочка</p>
                    </div>
                    <div className="row home_s1_box mt-5">
                        <div className="col-lg-6 home_s1_img">
                            <div className="home_s1_element  wow animate__animated  animate__rubberBand">
                                <div className="home_s1_element-blob_line"></div>
                            </div>
                            <div className="home_s1_blob"
                                 style={{background: `url(${about_s1}) no-repeat`, backgroundPosition: "33% 63%" ,
                                 backgroundSize:"cover"
                                 }}>
                            </div>

                            <div className="home_s1_element_iz"></div>
                        </div>
                        <div className="col-lg-6 home_s1_item_box">
                            <div className="home_s1_item" data-aos="fade-left">
                                <h3>Мы начали свой путь в 2013 году с целью стать лидерами в производстве мяса и
                                    яиц.</h3>
                                <p> С
                                    тех пор наша компания постоянно развивается, внедряя новейшие технологии и расширяя
                                    производственные мощности.
                                </p>
                            </div>
                            <div className="home_s1_item" data-aos="fade-left">
                                <h3>Основное направление нашей деятельности — производство мяса птицы и инкубационных
                                    яиц.</h3>
                            </div>
                            <div className="home_s1_item_sertefication" data-aos="fade-left">
                                <button  onClick={() => setVisible(true)}>Сертификация</button>
                            </div>
                            <div className="home_s1_item_tell" data-aos="fade-left">
                                <span><LocalPhoneIcon/></span>
                                <div className="home_s1_item_tell_text">
                                    <h2>Свяжитесь с нами</h2>
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
                                <span>Доверьтесь нам</span>
                                <h2>НАШИ КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ</h2>
                                <p>Натуральность и свежесть </p>
                            </div>
                            <div className="about_s2_text">
                                <ul>
                                    <li>
                                        <CheckCircleIcon/>
                                        Выращивание бройлерных цыплят
                                    </li>
                                    <li>
                                        <CheckCircleIcon/>
                                        Производство мяса птицы
                                    </li>
                                    <li>
                                        <CheckCircleIcon/>
                                        Производство инкубационных яиц
                                    </li>
                                </ul>
                                <Link to={"/product"} onClick={()=>{window.scroll(top)}}>Продукция</Link>
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
                                 style={{background: `url(${about_s3}) no-repeat`, backgroundSize: "100%" ,
                                 backgroundPosition:"left"
                                 }}>
                            </div>

                            <div className="home_s1_element_iz"></div>
                        </div>
                        <div className="col-lg-6 home_s1_item_box" data-aos="fade-left">
                            <div className="home_s1_title">
                                <span>Племенное производство и инкубация</span>
                                <h2>В нашем комплексе осуществляется импорт племенных цыплят из Венгрии. </h2>
                                <p>
                                    Эти цыплята
                                    выращиваются для получения инкубационных яиц, которые затем используются для
                                    выведения нового поколения.

                                    Сразу после вылупления цыплята передаются в бройлерные цеха, где они растут и
                                    развиваются в течение 30–40 дней.
                                </p>
                            </div>

                            <div className="home_s1_item">
                                <h3>На каждом этапе их содержания особое внимание
                                    уделяется условиям питания и ухода, что обеспечивает здоровье и быстрое развитие
                                    птиц.</h3>
                            </div>

                            <Link to={"/contact"}>Свяжитесь с нами</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"about_s4 home_s6"} style={{background:`url(${about_s4}) no-repeat center center`, backgroundSize:'cover'}}>
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
                                <h4>ИСТОРИЯ КОМПАНИИ</h4>
                                <p>С 2013 года производство мяса и яиц</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={about_s5_napravleniya}/>
                            </div>
                            <div className="home_s3_text">
                                <h4>НАШИ НАПРАВЛЕНИЯ</h4>
                                <p>Производство инкубационных яиц, выращивание бройлерных цыплят и производство мяса птицы.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={about_s5_sistema} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>КЛАСТЕРНАЯ СИСТЕМА</h4>
                                <p>От импорта племенных цыплят из Венгрии до выпуска готовой продукции.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={about_s5_spetsalist} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>НАШИ СПЕЦИАЛИСТЫ</h4>
                                <p>Команда из более чем 170 профессионалов, обеспечивающих высокое качество и надежность работы.</p>
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