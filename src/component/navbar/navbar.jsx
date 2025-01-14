import React, {useState, useEffect} from 'react';
import './navbar.css';
import logo from '../../assets/img/logo.png';
import {CloseOutlined, DownOutlined, MenuOutlined} from "@ant-design/icons";
import {useLocation} from "react-router-dom";
import {useLanguage} from "../../lang/LangContext.jsx";
import {useTranslation} from "react-i18next";
import {Dropdown, Space} from "antd";
import {languages} from "../../lang/langs.jsx";

export default function Navbar({onlyIcon = true}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);
    const location = useLocation();

    const {handleLanguageChange, selectedLanguage} = useLanguage();
    const {t} = useTranslation();

    useEffect(() => {
        const handleResize = (e) => {
            setIsMobile(e.matches);
        };

        const windowMatch = window.matchMedia('(max-width: 1000px)');
        windowMatch.addEventListener('change', handleResize);


        return () => windowMatch.removeEventListener('change', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <a className="logo" href="#">
                            <img src={logo} alt=""/> <p></p>
                        </a>

                        {/* Menu */}
                        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                            <ul>
                                <li className={location.pathname === "/" ? "active_location" : ""}><a
                                    href="/">{t("navbar.home")}</a></li>
                                <li className={location.pathname === "/about" ? "active_location" : ""}><a
                                    href="/about">{t("navbar.about")}</a></li>
                                <li className={location.pathname === "/product" ? "active_location" : ""}><a
                                    href="/product">{t("navbar.products")}</a></li>
                                <li className={location.pathname === "/contact" ? "active_location" : ""}><a
                                    href="/contact">{t("navbar.contact")}</a></li>
                                <li className={"nav_dropdown"}>
                                    <Dropdown
                                        menu={{
                                            items: languages,
                                            onClick: handleLanguageChange,
                                        }}
                                        style={{zIndex: 9999, cursor: "pointer"}}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                {onlyIcon ? (
                                                    <span style={{
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center"
                                                    }}>{selectedLanguage.icon} <p>{selectedLanguage.label} </p></span>
                                                ) : (
                                                    <>
                                                        {selectedLanguage.icon} {selectedLanguage.label} <DownOutlined/>
                                                    </>
                                                )}
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>

                        <div className="navburger" onClick={toggleMenu}>
                            {isMenuOpen ? <CloseOutlined/> : <MenuOutlined/>}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
