import React,{useEffect,useState} from 'react';
import Link from 'next/link';
import { getLocaleContent } from "../helper/get_locale_content";
import { useRouter } from "next/router";
import { useApp } from '../contexts/AppProvider';

function Menu() {
    const { locale } = useRouter()
    const { setShowMenuMobile } = useApp();
    return (
        <div className="modal">
        <div className="modal_container">
            <div className="title_modal">
                <h3>Menu</h3>
                <span className="close_modal" onClick={()=>setShowMenuMobile(false)}>X</span>
            </div>
            <div className="body_modal">
                <ul>
                    <li><Link href="/"><h4><a onClick={()=>setShowMenuMobile(false)}>{getLocaleContent(locale, "common.home")}</a></h4></Link></li>
                    <li><Link href="/portfolio"><h4><a onClick={()=>setShowMenuMobile(false)}>{getLocaleContent(locale, "common.portfolio")}</a></h4></Link></li>
                    <li><Link href="/about"><h4><a onClick={()=>setShowMenuMobile(false)}>{getLocaleContent(locale, "common.about")}</a></h4></Link></li>
                    <li><Link href="/skills"><h4><a onClick={()=>setShowMenuMobile(false)}>{getLocaleContent(locale, "common.skills")}</a></h4></Link></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Menu