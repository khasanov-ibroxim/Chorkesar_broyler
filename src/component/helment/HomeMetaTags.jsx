import React from 'react';
import { Helmet } from 'react-helmet-async';
import img from "../../assets/home/galarey/gallery_2.jpg"

const HomeMetaTags = () => {
    return (
        <Helmet>
                {/* Заголовок страницы */}
                <title>Вкус куриного совершенства | Качество бройлерной курицы</title>

                {/* Мета-описание */}
                <meta
                    name="description"
                    content="Вкус куриного совершенства. Свежая и безопасная бройлерная курица от производителя. Гарантия качества и натуральности в каждой упаковке."
                />
                <meta name="robots" content="index, follow"/>

                {/* Ключевые слова */}
                <meta
                    name="keywords"
                    content="бройлерная курица, свежее мясо, качество мяса, свежесть каждый день, натуральное мясо, экологически чистое мясо"
                />

                {/* Open Graph теги */}
                <meta property="og:title" content="Вкус куриного совершенства | Качество бройлерной курицы"/>
                <meta
                    property="og:description"
                    content="Вкус куриного совершенства. Свежая и безопасная бройлерная курица от производителя. Гарантия качества и натуральности в каждой упаковке."
                />
                <meta property="og:image" content="../../assets/home/galarey/gallery_2.jpg"/>
                <meta property="og:url" content="https://chorkesar.uz"/>

                {/* Теги для Twitter */}
                <meta name="twitter:title" content="Вкус куриного совершенства | Качество бройлерной курицы"/>
                <meta
                    name="twitter:description"
                    content="Вкус куриного совершенства. Свежая и безопасная бройлерная курица от производителя. Гарантия качества и натуральности в каждой упаковке."
                />
                <meta name="twitter:image" content="../../assets/home/galarey/gallery_2.jpg"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <link rel="canonical" href="https://chorkesar.uz/"/>
        </Helmet>
    );
};

export default HomeMetaTags;
