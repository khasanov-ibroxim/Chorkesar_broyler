import { Helmet } from 'react-helmet-async';
import img from "../../assets/home/galarey/gallery_6.jpg"
import React from "react";
const AboutMetaTags = () => {
    return (
        <Helmet>
                <title>О нас | CHORKESAR Бройлер</title>
                <meta
                    name="description"
                    content="CHORKESAR Бройлер - лидер в производстве куриного мяса и инкубационных яиц. Качество, которое чувствуешь с первого кусочка."
                />
                <meta
                    name="keywords"
                    content="куриное мясо, инкубационные яйца, CHORKESAR, бройлерные цыплята, свежая продукция"
                />
                <meta name="robots" content="index, follow"/>

                <meta name="author" content="CHORKESAR Broiler"/>
                <meta property="og:title" content="О нас | CHORKESAR Бройлер"/>
                <meta
                    property="og:description"
                    content="Мы производим высококачественное куриное мясо и инкубационные яйца с 2013 года."
                />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://chorkesar.uz/about"/>
                <meta property="og:image" content="../../assets/home/galarey/gallery_6.jpg"/>
                <link rel="canonical" href="https://chorkesar.uz/about"/>
        </Helmet>
    );
};

export default AboutMetaTags;
