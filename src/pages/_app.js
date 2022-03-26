import '../../styles/globals.css'
import '../../styles/swiper.min.css'
import "../../node_modules/antd/es/switch/style/index.css";

import { AppProvider } from '../contexts/AppProvider'
import Layout from '../component/Layout/DefaultLayout';

function MyApp({ Component, pageProps }) {
  const noLayout = Component.noLayout || false;

  return (
    <>
      <AppProvider>
            {
                noLayout ? <Component {...pageProps} /> :
                    <Layout {...pageProps}>
                        <Component {...pageProps} />
                    </Layout>
            }
        </AppProvider>
    </>
  )

}

export default MyApp
