import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./page/home/home.jsx";
import About from "./page/about/about.jsx";
import Contact from "./page/contact/contact.jsx";
import Product from "./page/product/product.jsx";
import Navbar from "./component/navbar/navbar.jsx";
import Footer from "./component/footer/footer.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<><Navbar/><Home/><Footer/></>} />
                <Route path="/about" element={<><Navbar/><About/><Footer/></>} />
                <Route path="/contact" element={<><Navbar/><Contact/><Footer/></>} />
                <Route path="/product" element={<><Navbar/><Product/><Footer/></>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;