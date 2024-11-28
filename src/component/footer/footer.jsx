import React from 'react';
import './footer.css'
import {Link, useLocation} from "react-router-dom";
import logo from '../../assets/img/logo.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>
            <footer>
                <div className="footer_element"></div>
                <div className="footer_box container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer_item footer_item_first">
                                <Link to={"#"}><img src={logo} alt=""/>Toviq</Link>
                                <p>At our poultry farm, our customers can be sure that they are buying high-quality
                                    poultry meat produced with care and attention to every detail.
                                </p>
                                <div className="footer_item_social">
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                    <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer_item footer_item_link">
                                <h3>Our Links</h3>
                                <ul>
                                    <li><Link to={"#"}><KeyboardArrowRightIcon/>Главная</Link></li>
                                    <li><Link to={"#"}><KeyboardArrowRightIcon/>о нас</Link></li>
                                    <li><Link to={"#"}><KeyboardArrowRightIcon/>Product</Link></li>
                                    <li><Link to={"#"}><KeyboardArrowRightIcon/>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer_item">
                                <h3>НАША ПОЧТА</h3>
                                <p>Мы всегда на связи — пишите нам!</p>
                                <div className="footer_item_send">
                                    <a href={"mailto:email-hamkornur@gmail.com"}> Отправить сообщение</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
};

export default Footer;