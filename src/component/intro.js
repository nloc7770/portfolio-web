import React from 'react'
import { motion } from 'framer-motion'
import { getLocaleContent } from "../helper/get_locale_content";
import { useRouter } from "next/router";

function intro() {
    const { locale } = useRouter()
    return (
        <motion.div className='intro-container' initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2 }}
        >
            <div className="text row">
                <div className='content-intro'> 
                 <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }} >
                    <h1>
                        {getLocaleContent(locale, `common.im`)}
                    </h1>
                    <h3>
                        {getLocaleContent(locale, `common.ido`)}
                    </h3>
                    {/* <h3>
                        {getLocaleContent(locale, `common.desc`)}
                    </h3> */}
                    <h3>
                        {getLocaleContent(locale, `common.quotes`)}
                    </h3>
                </motion.div>

                </div>

                <div className='img-url'>
                    <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }} >
                        <img src='https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-1/172003680_1151993241912709_1875434353264182821_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=1zt2da0G5v8AX_1Pe7t&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT8SfOpbnhqFk8po9UtJaE1XdF_UQDtxZ6HahEM5NDcUpg&oe=62530B6C' />
                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}

export default intro