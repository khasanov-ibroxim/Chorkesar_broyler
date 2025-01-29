import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import "./gallery.css";
import header from "../../assets/gallery/header_gallery.jpg";

// Import Swiper styles and components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = () => {
    const { t } = useTranslation();
    const [activeEmbed, setActiveEmbed] = useState("un87KWCiKq4?si=zZDNFNV-AOlN3TvT");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    const handleChangeEmbed = (embed) => {
        setActiveEmbed(embed);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const galleryItems = [
        { id: "un87KWCiKq4?si=zZDNFNV-AOlN3TvT", image: "https://img.youtube.com/vi/un87KWCiKq4/maxresdefault.jpg" },
        { id: "wV3R955Zjjw?si=6L2dXIp9JecZ2t0a", image: "https://img.youtube.com/vi/wV3R955Zjjw/maxresdefault.jpg" },
    ];

    return (
        <div>
            <div className="contact_header" style={{ backgroundImage: `url(${header})` }}>
                <div className="contact_opacity"></div>
                <div className="contact_header_left">
                    <h1>{t("gallery.gallery_header.left")}</h1>
                </div>
                <div className="contact_header_right">{t("gallery.gallery_header.right")}</div>
            </div>

            <div className="gallery_box container">
                <div className="gallery_box_title">
                    <div className="home_s1_title" style={{display: "block", textAlign: "left"}}>
                        <span style={{
                            display: "block",
                            textAlign: "left",
                            lineHeight:"25px"
                        }}>{t("gallery.gallery_title.span")}</span>
                        <h2 style={{display: "block", textAlign: "left"}}>{t("gallery.gallery_title.h2")}</h2>
                        <p style={{display: "block", textAlign: "left"}}>{t("gallery.gallery_title.p")}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 active_video">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{minHeight: "300px"}}
                            src={`https://www.youtube.com/embed/${activeEmbed}&amp;controls=0`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="col-lg-6 gallery_item_box">
                        {isMobile ? (
                            <Swiper
                                pagination={{ clickable: true }}
                                spaceBetween={0}
                                slidesPerView={2.2}
                                style={{width:"100%"}}
                            >
                                {galleryItems.map((item) => (
                                    <SwiperSlide key={item.id} onClick={() => handleChangeEmbed(item.id)}>
                                        <div className={`gallery_item`}>
                                            {activeEmbed === item.id && <div className="gallery_item_opacity"></div>}
                                            <img src={item.image} alt="Poster" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            galleryItems.map((item) => (
                                <div className="col-lg-6" key={item.id} onClick={() => handleChangeEmbed(item.id)}>
                                    <div className={`gallery_item`}>
                                        {activeEmbed === item.id && <div className="gallery_item_opacity"></div>}
                                        <img src={item.image} alt="Poster" />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;