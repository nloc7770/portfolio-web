import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from "next/router";
import SkillCard from "../../component/SkillCard"
function index() {
  const { locale } = useRouter()
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0" }} >
      <div className='component-style'>
        <SkillCard  />
      </div>
    </motion.div>

  )
}

export default index