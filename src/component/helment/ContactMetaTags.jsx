import React from 'react';
import {Helmet} from "react-helmet-async";
import img from "../../assets/contact/contact_header.jpg"
const ContactMetaTags = () => {
    return (
        <Helmet>
            <title>Контакты - Свяжитесь с нами</title>
            <meta name="description"
                  content="Свяжитесь с нами для получения информации о наших продуктах или с любыми вопросами. Мы всегда рады помочь вам!"/>
            <meta name="keywords"
                  content="контакты, обратная связь, связь с компанией, вопросы, информация, помощь, поддержка"/>
            <meta name="robots" content="index, follow"/>

            <meta property="og:title" content="Контакты - Свяжитесь с нами"/>
            <meta property="og:description"
                  content="Свяжитесь с нами для получения информации о продукции, вопросов или запросов. Мы всегда готовы помочь и ответить на ваши вопросы."/>
            <meta property="og:image" content="../../assets/contact/contact_header.jpg"/>
            <meta property="og:url" content="https://chorkesar.uz/contact"/>
            <meta property="og:type" content="website"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Контакты - Свяжитесь с нами"/>
            <meta name="twitter:description"
                  content="Нужна помощь или информация? Свяжитесь с нами, и мы с радостью ответим на все ваши вопросы."/>
            <meta name="twitter:image" content="../../assets/contact/contact_header.jpg"/>
            <link rel="canonical" href="https://chorkesar.uz/contact"/>
        </Helmet>
    );
};

export default ContactMetaTags;