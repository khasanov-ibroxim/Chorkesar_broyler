import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import homeTranslations from "./translations/homeTranslate.jsx";
import aboutTranslations from "./translations/aboutTranslate.jsx";
import productsTranslations from "./translations/productsTranslate.jsx";
import contactTranslate from "./translations/contactTranslate.jsx";
import galleryTranslate from "./translations/galleryTranslate.jsx";

const resources = {
    ru: {
        translation: {
            home: homeTranslations.ru,
            about: aboutTranslations.ru,
            products: productsTranslations.ru,
            contact: contactTranslate.ru,
            gallery: galleryTranslate.ru,

            navbar: {
                home: "Главная",
                about: "О нас",
                products: "Продукция",
                contact: "Контакты",
                gallery: "Галерея",
            },

            footer: {
                item_1:"Остались вопросы или нужна дополнительная информация? Мы всегда открыты для общения.",
                item_2:{
                    title:"Меню",
                    home: "Главная",
                    about: "О нас",
                    products: "Продукция",
                    contact: "Контакты",
                },
                item_3:{
                    h3:"НАША ПОЧТА",
                    p:"На связи с вами",
                    link:"Отправить сообщение"
                }
            },

            contacts:"Контакты"
        },
    },
    en: {
        translation: {
            home: homeTranslations.en,
            about: aboutTranslations.en,
            products: productsTranslations.en,
            contact: contactTranslate.en,
            gallery: galleryTranslate.en,

            navbar: {
                home: "Home",
                about: "About",
                products: "Products",
                contact: "Contacts",
                gallery: "Gallery",
            },
            footer: {
                item_1:"Still have questions or need additional information? We are always open for communication.",
                item_2:{
                    title:"Menu",
                    home: "Home",
                    about: "About Us",
                    products: "Product",
                    contact: "Contacts",
                },
                item_3:{
                    h3:"OUR MAIL",
                    p:"In touch with you",
                    link:"Send a message"
                }
            },

            contacts:"Contacts"
        }
    },
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false,
        },
        resources,
    });

export default i18n;
