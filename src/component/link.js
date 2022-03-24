import React from 'react'
import Link from 'next/link'
import { getLocaleContent } from "../helper/get_locale_content";
import { useRouter } from "next/router";
function work({name}) {
    const { locale } = useRouter()
    return (
        <div className={`${name}`}> <Link href={`/${name}`}>
            <h3>
                <a target="_blank" >
                    {getLocaleContent(locale, `common.${name}`)}
                </a>
            </h3>
        </Link></div>
    )
}

export default work