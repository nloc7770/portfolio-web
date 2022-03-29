import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import { getLocaleContent } from "../helper/get_locale_content";
function connect() {
    const { locale } = useRouter()
    return (
        <div className='connect'>
            <a href="mailto:nloc7770@gmail.com" >
                <h3>
                    <a target="_blank" >
                        {getLocaleContent(locale, "common.connect")}
                    </a>
                </h3>
            </a>
        </div>
    )
}

export default connect