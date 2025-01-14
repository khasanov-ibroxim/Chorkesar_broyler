import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import {LanguageProvider} from "./lang/LangContext.jsx";
import {HelmetProvider} from "react-helmet-async";


createRoot(document.getElementById('root')).render(
    <LanguageProvider>
        <HelmetProvider>
            <App/>
        </HelmetProvider>
    </LanguageProvider>
)
