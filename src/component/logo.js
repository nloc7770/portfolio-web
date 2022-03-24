import React from 'react'
import Link from 'next/dist/client/link'
function logo() {
    return (
        <div className='logo'><Link href="/"><h1>LN</h1></Link></div>
    )
}

export default logo