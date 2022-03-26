import React from 'react'
import { motion } from 'framer-motion'
import { getLocaleContent } from "../../helper/get_locale_content";
import { useRouter } from "next/router";
import { About } from "../../data/about"
import AboutSlide from "../../component/AboutSlide"
function AboutPage() {
  const { locale } = useRouter()
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0" }} >
      <div className='component-style'>
        <AboutSlide data={About} />
      </div>
    </motion.div>

  )
}

export default AboutPage