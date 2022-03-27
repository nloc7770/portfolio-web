import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { useRouter } from "next/router";
import Link from "next/link";

import SwiperCore, { Pagination } from "swiper";

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
                            <h3>{locale == "vn" ? "Tên dự án : " : "Project name : "} {e.project_name}</h3>
                            <h4>{locale == "vn" ? "Mô tả dự án: " : "Project Description: "} {locale == "vn" ? e.desc_vn : e.desc_en}</h4>
                            {e.teamsize ? <h4>{locale == "vn" ? "Số lượng thành viên : " : "Team size : "} {e.teamsize}</h4> : null}
                            <h4>{locale == "vn" ? "Vị  trí phụ trách : " : "Responsiblities : "} {locale == "vn" ? e.responsiblities_vn : e.responsiblities_en}</h4>
                            {e.tech ? <h4>{locale == "vn" ? "Công nghệ : " : "Technologies : "} {e.tech}</h4> : null}
                            {e.url ? <a href={`${e.url}`} target="_blank">{locale == "vn" ? "Đường dẫn : " : "Link : "}{e.url}</a> : null}

                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
}

export default PortfolioSilde