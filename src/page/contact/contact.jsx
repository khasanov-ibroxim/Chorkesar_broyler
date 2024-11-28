import React from 'react';
import "./contact.css"
import shape from "../../assets/img/shape.svg";
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Contact(props) {
    return (
        <div className="contact">
            <div className="contact_header">
                <div className="header_shape_top">
                    <img src={shape} alt=""/>
                </div>
                <div className="contact_opacity"></div>
                <div className="contact_header_left">
                    <h1>Contact Us</h1>
                </div>
                <div className="contact_header_right">
                    Home | Contact Us
                </div>
                <div className="header_shape_bottom">
                    <img src={shape} alt=""/>
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
                                    <h4>Phone</h4>
                                    <a href="#">+998 99 123 32 21</a>
                                    <a href="#">+998 99 123 32 21</a>
                                </div>

                            </div>
                            <div className="contact_box_item">
                                <div className="contact_box_item_icon">
                                    <PlaceIcon/>
                                </div>
                                <div className="contact_box_item_text">
                                    <h4>Address</h4>
                                    <a href="#">Республика Узбекистан , Ташкентская область, г. Ахангаран, участок
                                        В6</a>
                                </div>
                            </div>
                            <div className="contact_box_item">
                                <div className="contact_box_item_icon">
                                    <EmailIcon/>
                                </div>
                                <div className="contact_box_item_text">
                                    <h4>Email</h4>
                                    <a href="#">Office@gmail.com</a>
                                    <a href="#">Office2@gmail.com</a>
                                </div>

                            </div>
                            <div className="contact_box_item">
                                <div className="contact_box_item_icon">
                                    <AccessTimeIcon/>
                                </div>
                                <div className="contact_box_item_text">
                                    <h4>Opening Hours</h4>
                                    <a href="#">Du - Ju | 8:00 - 20:00</a>
                                    <a href="#">Sha - Ya | 8:00 - 20:00</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact_right">
                                <div className="contact_right_title">
                                    <span>Send us a message</span>
                                    <h2>Help us with your feedback; it is of great value, so we can serve you better and
                                        better</h2>
                                </div>
                                <form action="#">
                                    <input type="text"/>
                                    <input type="text"/>
                                    <textarea rows="5" placeholder="Сообщение"/>
                                    <button>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 contact_map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22977.426229027522!2d69.20601599999999!3d41.2188672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6136b1d6ff33%3A0x3c951a01576e8486!2z0KLQoNCmIEdvbGRlbiBsaWZl!5e1!3m2!1sru!2s!4v1732736728117!5m2!1sru!2s"
                            width="100%" height="450" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{borderRadius: "20px"}}
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;