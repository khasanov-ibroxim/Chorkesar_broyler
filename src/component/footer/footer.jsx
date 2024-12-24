import React from 'react';
import './footer.css'
import {Link, useLocation} from "react-router-dom";
import logo from '../../assets/img/logo.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const flyTop = ()=>{
        window.scrollTo(0,0);
    }

    return (
        <>
            <footer>
                <div className="footer_element"></div>
                <div className="footer_box container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer_item footer_item_first">
                                <Link to={"#"}><img src={logo} alt=""/></Link>
                                <p>
                                    Остались вопросы или нужна дополнительная информация? Мы всегда открыты для общения.
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
                                <h3>ССЫЛКИ</h3>
                                <ul>
                                    <li><Link to={"/"} onClick={flyTop}><KeyboardArrowRightIcon/>Главная</Link></li>
                                    <li><Link to={"/about"} onClick={flyTop}><KeyboardArrowRightIcon/>О нас</Link></li>
                                    <li><Link to={"/product"} onClick={flyTop}><KeyboardArrowRightIcon/>Продукция</Link></li>
                                    <li><Link to={"/contact"} onClick={flyTop}><KeyboardArrowRightIcon/>Контакты</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer_item">
                                <h3>НАША ПОЧТА</h3>
                                <p>На связи с вами</p>
                                <div className="footer_item_send">
                                    <Link to={"/contact"} onClick={()=>{window.scroll(top)}}> Отправить сообщение</Link>
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