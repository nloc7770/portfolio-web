import React from 'react'
import { motion } from 'framer-motion'
import { getLocaleContent } from "../../helper/get_locale_content";
import { useRouter } from "next/router";
import { Portfolio } from "../../data/portfolio"
import PortfolioSilde from "../../component/PortfolioSilde"
function PortfolioPage() {
  const { locale } = useRouter()
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0" }} >
      <div className='component-style'>
        <PortfolioSilde data={Portfolio} />
        
      </div>
    </motion.div>

  )
}

export default PortfolioPage