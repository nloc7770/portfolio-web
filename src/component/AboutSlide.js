import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { useRouter } from "next/router";
import Link from "next/link";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);
function AboutSlide({ data }) {
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
    const renderDesc = (desc) => {
        let descArr = desc.split(". ")
        return descArr && descArr.length > 0 && descArr.map((item, index) => (
            <li key={`desc${item}`}>
                <h4 className='h2'>{item} </h4>
            </li>
        ))
    }
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
                        <div className="swiper-slide prortfolio-items ">
                            <h3 className='text-center h1' >{locale == "vn" ? e.name_vn : e.name_en} </h3>
                            <ul>
                                {locale == "vn" ? renderDesc(e.desc_vn) : renderDesc(e.desc_en)}
                            </ul>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
}

export default AboutSlide