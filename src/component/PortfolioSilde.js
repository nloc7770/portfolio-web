import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { useRouter } from "next/router";
import Link from "next/link";

import SwiperCore, { Pagination} from "swiper";

SwiperCore.use([Pagination]);
function PortfolioSilde({ data }) {
    const { locale } = useRouter()

    const swiperConfig = {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next ",
            prevEl: ".swiper-button-prev ",
        },

    };

    return (
        <Swiper
            {...swiperConfig}
            pagination={true}
            className="swiper-card"
            
        >
            {data.map((e, index) => {
                return (
                    <SwiperSlide
                        key={e.id}
                    >
                        <div className="swiper-slide prortfolio-items">
                            <h1>{locale == "vn" ? "Tên dự án : " : "Project name : "} {e.project_name}</h1>
                            {e.teamsize?<h3>{locale == "vn" ? "Số lượng thành viên : " : "Team size : "} {e.teamsize}</h3>:null}
                            <h3>{locale == "vn" ? "Vị  trí phụ trách : " : "Responsiblities : "} {locale == "vn" ?e.desc_vn:e.desc_en}</h3>
                            {e.tech?<h3>{locale == "vn" ? "Công nghệ : " : "Technologies : "} {e.tech}</h3>:null} 
                            {e.url?<a href={`${e.url}`} target="_blank">{locale == "vn" ? "Đường dẫn : " : "Link : "}{e.url}</a>:null}
                        
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
}

export default PortfolioSilde