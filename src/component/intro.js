import React from "react";
import { motion } from "framer-motion";
import { getLocaleContent } from "../helper/get_locale_content";
import { useRouter } from "next/router";
import { DownloadOutlined } from "@ant-design/icons";
function intro() {
  const { locale } = useRouter();
  return (
    <motion.div
      className="intro-container"
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2 }}
    >
      <div className="text row">
        <div className="content-intro">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h1>{getLocaleContent(locale, `common.im`)}</h1>
            <h3>{getLocaleContent(locale, `common.ido`)}</h3>
            {/* <h3>
                        {getLocaleContent(locale, `common.desc`)}
                    </h3> */}
            <h3>{getLocaleContent(locale, `common.quotes`)}</h3>
            <a
              className="button-cv"
              href="https://docs.google.com/gview?embedded=true&url=https%3A%2F%2Fitviec.com%2Frails%2Factive_storage%2Fblobs%2Fproxy%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd05OSmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ%3D%3D--bd02527310f7d5f9e049f2f71dd5457ff7d2a1a8%2FCV_LOCND.pdf"
              target={"_blank"}
            >
              <DownloadOutlined /> {getLocaleContent(locale, `common.cv`)}
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default intro;
