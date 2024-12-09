import React from 'react';
import "./contact.css"
import shape from "../../assets/img/shape.svg";
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Contact() {
    return (
        <div className="contact">
            <div className="contact_header">

                <div className="contact_opacity"></div>
                <div className="contact_header_left">
                    <h1>Контакты</h1>
                </div>
                <div className="contact_header_right">
                    Главная | Контакты
                </div>

            </div>

            <section className="contact_box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="contact_box_item">
                                <div className="contact_box_item_icon">
                                    <PermPhoneMsgIcon/>
                                </div>
                                <div className="contact_box_item_text">
                                    <h4>Телефон</h4>
                                    <a href="tel:+998951204111">+998 95 120 41 11</a>
                                    <a href="tel:+998972570384">+998 97 257 03 84</a>
                                    <a href="tel:+998996330053">+998 99 633 00 53</a>
                                </div>

                            </div>
                            <div className="contact_box_item">
                                <div className="contact_box_item_icon">
                                    <PlaceIcon/>
                                </div>
                                <div className="contact_box_item_text">
                                    <h4>Адрес</h4>
                                    <a href="https://maps.app.goo.gl/bR65G55rTsMx8Hcx9">Республика Узбекистан , Наманганская область
                                        Попский район,
                                        Уйгурсой МФЙ, участок №19</a>
                                </div>
                            </div>
                            <div className="contact_box_item">
                                <div className="contact_box_item_icon">
                                    <EmailIcon/>
                                </div>
                                <div className="contact_box_item_text">
                                    <h4>Почта</h4>
                                    <a href="mailto:broyler01@mail.ru">broyler01@mail.ru</a>
                                </div>
                            </div>
                            <div className="contact_box_item">
                                <div className="contact_box_item_icon">
                                    <AccessTimeIcon/>
                                </div>
                                <div className="contact_box_item_text">
                                    <h4>Время работы</h4>
                                    <p>с 8:00 до 20:00</p>
                                    <p>без выходных</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact_right">
                                <div className="contact_right_title">
                                    <span>Контакты</span>
                                    <h2>Мы всегда рады вас слышать и отвечать на ваши вопросы! Свяжитесь с нами любым
                                        удобным для вас способом:</h2>
                                </div>
                                <form action="#">
                                    <input type="text" placeholder={"Имя"}/>
                                    <input type="text" placeholder={"Телефон номер"}/>
                                    <textarea rows="5" placeholder="Сообщение"/>
                                    <button>Отправить</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 contact_map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2676.283710060685!2d71.05589824596088!3d40.89571060658807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDUzJzQ0LjUiTiA3McKwMDMnMjEuMiJF!5e1!3m2!1sru!2s!4v1733598443630!5m2!1sru!2s"
                            width="100%" height="450" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{borderRadius: "20px"}}></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;