import React from 'react'
import { motion } from 'framer-motion'
import { getLocaleContent } from "../helper/get_locale_content";
import { useRouter } from "next/router";
import {
    DownloadOutlined
  } from '@ant-design/icons';
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
                        <a className='button-cv' href='https://docs.google.com/gview?embedded=true&url=https%3A%2F%2Fitviec.com%2Frails%2Factive_storage%2Fblobs%2Fproxy%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd05OSmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ%3D%3D--bd02527310f7d5f9e049f2f71dd5457ff7d2a1a8%2FCV_LOCND.pdf' target={"_blank"}>
                        <DownloadOutlined /> {getLocaleContent(locale, `common.cv`)}
                        </a>
                    </motion.div>

                </div>

                <div className='img-url'>
                    <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }} >
                        <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/275627078_284332510521685_3140852489407804615_n.jpg?stp=dst-jpg_p75x225&_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=FGvGOlN2DvsAX8kSDf0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIt_xjPsqp_63HV2W1lGgk0ahL8297so8qooSr7rm1vTw&oe=62640FCA' />
                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}

export default intro