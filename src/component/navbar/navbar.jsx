import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/img/logo.png';
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import {useLocation} from "react-router-dom";

export default function Navbar({setIsModalOpen}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);
    const location = useLocation();

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
    console.log(location)
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <a className="logo" href="#">
                            <img src={logo} alt=""/> <p>Toviq</p>
                        </a>

                        {/* Menu */}
                        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                            <ul>
                                <li className={location.pathname === "/" ? "active_location" : ""}><a href="/">Главная</a></li>
                                <li className={location.pathname === "/about" ? "active_location" : ""}><a href="/about">о нас</a></li>
                                <li className={location.pathname === "/product" ? "active_location" : ""}><a href="/product">Product</a></li>
                                <li className={location.pathname === "/contact" ? "active_location" : ""}><a href="/contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="navburger" onClick={toggleMenu}>
                            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
