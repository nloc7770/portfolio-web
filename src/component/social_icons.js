import Link from 'next/link'
import React from 'react'
import { Facebook, Github, Linked } from './svg_logo'
function socialIcons() {
    return (
        <div className='social-list'>
            <Link href={'https://www.facebook.com/nloc7780'}>
                <a target={'_blank'}>
                    <Facebook width={25} height={25} fill="currentColor" />
                </a>
            </Link>
            <Link href={'https://www.linkedin.com/in/nguy%E1%BB%85n-l%E1%BB%99c-7b26111ba/'}>
                <a target={'_blank'}>
                    <Linked width={25} height={25} fill="currentColor" />
                </a>
            </Link>
            <Link href={'https://github.com/nloc7770'}>
                <a target={'_blank'}>
                    <Github width={25} height={25} fill="currentColor" />
                </a>
            </Link>
            <Link href={'https://github.com/nloc7770'}>
                <a target={'_blank'}>
                    <Github width={25} height={25} fill="currentColor" />
                </a>
            </Link>
            <div className='line'></div>

        </div>
    )
}

export default socialIcons