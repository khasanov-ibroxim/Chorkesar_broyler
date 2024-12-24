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


function Home(props) {
    return (
        <div className={"home_page"}>
            <header className="home-header">

                <span className="opacity_header"></span>
                <div className="home_header_text">
                    <span>От инкубатора до вашего стола</span>
                    <h1>ВКУС КУРИНОГО СОВЕРШЕНСТВА</h1>
                    <p>Высококачественное мясо, выращенное с любовью и заботой</p>
                    <Link to={"/contact"}>Контакты</Link>
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
                        <span>Сочные вкусы, выверенные стандарты</span>
                        <h2>КАЧЕСТВО, КОТОРОЕ ЧУВСТВУЕШЬ С ПЕРВОГО КУСОЧКА</h2>
                        <p>Ваш выбор для семейных ужинов.</p>
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
                                <h3>СВЕЖЕЕ И БЕЗОПАСНОЕ МЯСО БРОЙЛЕРНОЙ КУРИЦЫ ОТ ПРОИЗВОДИТЕЛЯ.</h3>
                                <p>
                                    Мы заботимся о вашем столе, предлагая только экологически чистую продукцию,
                                    соответствующую самым строгим стандартам.
                                </p>
                            </div>
                            <div className="home_s1_item" data-aos="fade-left">
                                <h3>ТРАДИЦИИ ВКУСА, ТЕХНОЛОГИИ БУДУЩЕГО</h3>
                            </div>
                            <div className="home_s1_item_tell" data-aos="fade-left">
                                <span><LocalPhoneIcon/></span>
                                <div className="home_s1_item_tell_text">
                                    <h2>СВЯЖИТЕСЬ С НАМИ?</h2>
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
                            <h4>Качество, проверенное временем</h4>
                            <h1>ДОВЕРИЕ МИЛЛИОНОВ-НАША ГЛАВНАЯ НАГРАДА</h1>
                            <p>Мы тщательно следим за каждым этапом: от выращивания бройлеров до поставки свежего
                                куриного мяса.</p>
                            <p>Наши стандарты- это гарантия качества и натуральности в каждой упаковке.</p>
                            <Link to={"/about"} onClick={()=>{window.scroll(top)}}>О нас</Link>
                        </div>
                        <div className="col-lg-6 home_s2_img" data-aos="fade-left">
                            <img src={home_s2} alt=""/>
                            <div className="home_s2_element_top">
                                <h1>Бройлерная курица-забота о будущем.</h1>
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
                                <h4>СВЕЖЕСТЬ КАЖДЫЙ ДЕНЬ</h4>
                                <p>Гарантия натурального вкуса и пользы.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={home_s3_kantrol} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>КОНТРОЛЬ НА КАЖДОМ ЭТАПЕ</h4>
                                <p>От фермы до вашей <br/> кухни.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={home_s3_texnalogiya} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>СОВРЕМЕННЫЕ ТЕХНОЛОГИИ</h4>
                                <p>Инновации для вашего комфорта и безопасности.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 home_s3_item">
                            <div className="home_s3_icon">
                                <img src={home_s3_eko} alt=""/>
                            </div>
                            <div className="home_s3_text">
                                <h4>НАТУРАЛЬНО И ЭКОЛОГИЧНО</h4>
                                <p>Только то, что важно для здоровья вашей семьи.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_s3_element_bottom"></div>
            </section>

            <section className="home_s4">
                <div className="container">
                    <div className="home_s4_title">
                        <span>Наши достижения в цифрах</span>
                        <h3>КАЖДЫЙ ПОКАЗАТЕЛЬ-РЕЗУЛЬТАТ НАШЕЙ ЗАБОТЫ И ВАШЕГО ДОВЕРИЯ</h3>
                        <p>Путь к совершенству</p>
                    </div>

                    <div className="row justify-content-between">
                        <div className="col-lg-3 wow animate__animated  animate__rubberBand">
                            <div className="home_s4_item_element"></div>
                            <div className="home_s4_item ">
                                <p>Инкубационных яиц до</p>
                                <h1> 5 млн </h1>
                                <p>штук</p>
                            </div>
                        </div>
                        <div className="col-lg-3 wow animate__animated  animate__rubberBand">
                            <div className="home_s4_item_element"></div>
                            <div className="home_s4_item">
                                <p>Бройлерных цыплят до</p>
                                <h1>4 млн</h1>
                                <p>штук</p>
                            </div>
                        </div>
                        <div className="col-lg-3 wow animate__animated  animate__rubberBand">
                            <div className="home_s4_item_element"></div>
                            <div className="home_s4_item">
                                <p>Мяса птицы до</p>
                                <h1>4000</h1>
                                <p>тонн</p>
                            </div>
                        </div>
                        <div className="col-lg-3 wow animate__animated  animate__rubberBand">
                            <div className="home_s4_item_element"></div>
                            <div className="home_s4_item">
                                <p>Кормов до</p>
                                <h1>24000</h1>
                                <p>тонн</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={'home_s5'}>
                <div className="home_s3_element_top"></div>
                <div className="container">
                    <div className="home_s5_title">
                        <span>От фермы до вашего стола</span>
                        <h1>С НАМИ ВЫ УВЕРЕНЫ В ТОМ, ЧТО ВЫБИРАЕТЕ ЛУЧШЕЕ</h1>
                    </div>
                    <div className="gallery-container">
                        <div className="gallery-item">
                            <Image src={gallery_1} alt=""
                                   preview={{
                                       mask: <div className={"preview_box"}><EyeOutlined/> <span>Открыть</span>
                                       </div>
                                   }}
                            />
                        </div>
                        <div className="gallery-item">
                            <Image src={gallery_2} alt=""
                                   preview={{
                                       mask: <div className={"preview_box"}><EyeOutlined/> <span>Открыть</span>
                                       </div>
                                   }}
                            />
                        </div>
                        <div className="gallery-item">
                            <Image src={gallery_3} alt=""
                                   preview={{
                                       mask: <div className={"preview_box"}><EyeOutlined/> <span>Открыть</span>
                                       </div>
                                   }}
                            />
                        </div>
                        <div className="gallery-item">
                            <Image src={gallery_4} alt=""
                                   preview={{
                                       mask: <div className={"preview_box"}><EyeOutlined/> <span>Открыть</span>
                                       </div>
                                   }}
                            />
                        </div>
                        <div className="gallery-item">
                            <Image src={gallery_5} alt=""
                                   preview={{
                                       mask: <div className={"preview_box"}><EyeOutlined/> <span>Открыть</span>
                                       </div>
                                   }}
                            />
                        </div>
                        <div className="gallery-item">
                            <Image src={gallery_6} alt=""
                                   preview={{
                                       mask: <div className={"preview_box"}><EyeOutlined/> <span>Открыть</span>
                                       </div>
                                   }}
                            />
                        </div>
                    </div>
                </div>
                <div className="home_s3_element_bottom"></div>
            </section>

            <section className={"home_s6"} style={{background:`url(${home_s6}) no-repeat center center` , backgroundSize:"cover"}}>
                <div className="home_s6_opacity"></div>
                <div className="home_s3_element_top"></div>
                <div className="home_s3_element_bottom"></div>
            </section>

            <section className={'home_s7'}>
                <div className="container">
                    <div className="home_s7_title">
                        <div className="home_s7_title_text" data-aos="fade-up">
                            <span>Свежесть и натуральность</span>
                            <h3>УЗНАЙТЕ, КАК МЫ ОБЕСПЕЧИВАЕМ ВЫСОКИЕ СТАНДАРТЫ</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div data-aos="fade-right" className="col-lg-4 home_s7_item">
                            <div className="home_s7_item_img">
                                <img src={home_header_1} alt=""/>
                            </div>
                            <div className="home_s7_item_text">
                                <h4> Строгий контроль качества </h4>
                                <p>Вся продукция проходит тщательную проверку на каждом этапе: от выращивания птицы до
                                    упаковки. Мы гарантируем, что каждая бройлерная курица соответствует высшим
                                    стандартам безопасности и качества.</p>
                                <Link to={"#"}>Подробно<DoubleArrowIcon/></Link>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-lg-4 home_s7_item">
                            <div className="home_s7_item_img">
                                <img src={home_header_2} alt=""/>
                            </div>
                            <div className="home_s7_item_text">
                                <h4>Натуральность и свежесть </h4>
                                <p>Мы используем только натуральные корма и заботимся о здоровье птиц, чтобы мясо
                                    оставалось вкусным и полезным. Свежесть каждой упаковки гарантируется благодаря
                                    современным технологиям хранения и транспортировки.</p>
                                <Link to={"#"}>Подробно <DoubleArrowIcon/></Link>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-lg-4 home_s7_item">
                            <div className="home_s7_item_img">
                                <img src={home_header_1} alt=""/>
                            </div>
                            <div className="home_s7_item_text">
                                <h4>Доверие потребителей</h4>
                                <p>Доверие миллионов клиентов — наша главная награда. Мы стремимся к прозрачности на
                                    всех этапах производства и обеспечиваем полную уверенность в качестве нашей
                                    продукции.</p>
                                <Link to={"#"}>  Подробно <DoubleArrowIcon/></Link>
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
                                <h2>Спасибо за ваш выбор!</h2>
                                <p>Мы ценим ваше доверие и готовы быть рядом, чтобы обеспечить вкус и качество в каждом
                                    вашем дне.
                                </p>
                            </div>
                            <Link to={"/contact"} onClick={()=>{window.scroll(top)}}>КОТАКТЫ</Link>
                        </div>
                        <div className="home_s8_box_element_bottom"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
