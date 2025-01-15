import React from 'react';
import {Helmet} from "react-helmet-async";
import img from "../../assets/home/galarey/gallery_2.jpg"
const ProductMetaTags = () => {
    return (
        <Helmet>

            <title>Продукция - Высококачественное мясо и яйца</title>
            <meta name="description"
                  content="Откройте для себя нашу продукцию: высококачественное мясо бройлеров и яйца, выращенные с заботой о каждом этапе производства. Мы гарантируем исключительное качество и натуральный вкус."/>
            <meta name="keywords"
                  content="мясо бройлеров, высококачественные яйца, свежее мясо, натуральный вкус, полезные яйца, экологическое кормление, фермерские продукты, питательная ценность, нежное мясо, яйца с ярким желтком"/>
            <meta name="robots" content="index, follow"/>

            <meta property="og:title" content="Продукция - Высококачественное мясо и яйца"/>
            <meta property="og:description"
                  content="Изучите нашу продукцию: мясо бройлеров и яйца, выращенные с природным кормом. Наслаждайтесь нежным, сочным мясом и яйцами, богатыми питательными веществами."/>
            <meta property="og:image" content="../../assets/home/galarey/gallery_2.jpg"/>
            <meta property="og:url" content="https://chorkesar.uz/product"/>
            <meta property="og:type" content="website"/>


            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Продукция - Высококачественное мясо и яйца"/>
            <meta name="twitter:description"
                  content="Высококачественное мясо бройлеров и яйца, выращенные с заботой и экологичным кормлением, обеспечивающие исключительный вкус и питательные вещества."/>
            <meta name="twitter:image" content="../../assets/home/galarey/gallery_2.jpg"/>

            <link rel="canonical" href="https://chorkesar.uz/product"/>
        </Helmet>
    );
};

export default ProductMetaTags;