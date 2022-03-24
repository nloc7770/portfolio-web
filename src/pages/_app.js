import '../../styles/globals.css'
import '../../styles/swiper.min.css'
import "../../node_modules/antd/es/switch/style/index.css";

import { AppProvider } from '../contexts/AppProvider'
import Layout from '../component/Layout/index';

function MyApp({ Component, pageProps }) {
  return <AppProvider>
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  </AppProvider>

}

export default MyApp
