import React from 'react';
import './footer.css'
import {Link, useLocation} from "react-router-dom";
import logo from '../../assets/img/logo.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const {t} = useTranslation();
    const flyTop = () => {
        window.scrollTo(0, 0);
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
                                <p>{t("footer.item_1")}</p>
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
                                <h3>{t("footer.item_2.title")}</h3>
                                <ul>
                                    <li><Link to={"/"} onClick={flyTop}><KeyboardArrowRightIcon/>{t("footer.item_2.home")}</Link></li>
                                    <li><Link to={"/about"} onClick={flyTop}><KeyboardArrowRightIcon/>{t("footer.item_2.about")}</Link></li>
                                    <li><Link to={"/product"} onClick={flyTop}><KeyboardArrowRightIcon/>{t("footer.item_2.products")}</Link></li>
                                    <li><Link to={"/contact"} onClick={flyTop}><KeyboardArrowRightIcon/>{t("footer.item_2.contact")}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer_item">
                                <h3>{t("footer.item_3.h3")}</h3>
                                <p>{t("footer.item_3.p")}</p>
                                <div className="footer_item_send">
                                    <Link to={"/contact"} onClick={() => {
                                        window.scroll(top)
                                    }}>{t("footer.item_3.link")}</Link>
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