import React from 'react'
import { getLocaleContent } from "../helper/get_locale_content";
import { useRouter } from "next/router";

function SkillCard() {
    const { locale } = useRouter()

    return (
        <div
            className="swiper-card"
        >
            <div className=" prortfolio-items row">
                <div>
                    <h3 className='h3'> {getLocaleContent(locale, `common.lang`)}</h3>
                    <ul>
                        <li>
                            <h4 className='h4'>JavaScript</h4>
                        </li>
                        <li>
                            <h4 className='h4'>HTML, CSS</h4>
                        </li>
                    </ul>
                    <h3 className='h3'>
                    {getLocaleContent(locale, `common.FR&PLA`)}
                    </h3>
                    <ul>
                        <li>
                            <h4 className='h4'>ReactJS / NextJS / NodeJS</h4>
                        </li>
                        <li>
                            <h4 className='h4'>RestfulAPI / Json</h4>
                        </li>
                        <li>
                            <h4 className='h4'>Redis / ExpressJS</h4>
                        </li>
                        
                    </ul>
                </div>
                <div>
                    <h3 className='h3'>{getLocaleContent(locale, `common.data`)}</h3>
                    <ul>
                        <li>
                            <h4 className='h4'>Microsoft SQL, MySQL</h4>
                        </li>
                    </ul>
                    <h3 className='h3'>
                    {getLocaleContent(locale, `common.control`)}
                    </h3>
                    <ul>
                        <li>
                            <h4 className='h4'>Github</h4>
                        </li>
                        <li>
                            <h4 className='h4'>GitLab</h4>
                        </li>
                    </ul>
                    <h3 className='h3'>{getLocaleContent(locale, `common.ide`)}</h3>
                    <ul>
                        <li>
                            <h4 className='h4'>Visual Studio</h4>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='h3'>{getLocaleContent(locale, `common.known`)}</h3>
                    <ul>
                        <li>
                            <h4 className='h4'>{getLocaleContent(locale, `common.known1`)}</h4>
                        </li>
                        <li>
                            <h4 className='h4'>{getLocaleContent(locale, `common.known2`)}</h4>
                        </li>
                        <li>
                            <h4 className='h4'>{getLocaleContent(locale, `common.known3`)}</h4>
                        </li><li>
                            <h4 className='h4'>{getLocaleContent(locale, `common.known4`)}</h4>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default SkillCard