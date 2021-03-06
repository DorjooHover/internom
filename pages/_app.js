import Layout from "../src/components/layouts/main";
import Fonts from "../src/components/fonts";
import { AnimatePresence } from "framer-motion";
import Chakra from "../src/components/chakra";
import "../styles/globals.css";
import "../styles/swiper.scss";
if (typeof window !== "undefined") {
     window.history.scrollRestoration = "manual";
}

import "swiper/css/bundle";
import "@splidejs/react-splide/css";
function Website({ Component, pageProps, router }) {
     return (
          <Chakra cookies={pageProps.cookies}>
               <Fonts />
               <Layout router={router}>
                    <AnimatePresence
                         exitBeforeEnter
                         initial={true}
                         onExitComplete={() => {
                              if (typeof window !== "undefined") {
                                   window.scrollTo({ top: 0 });
                              }
                         }}
                    >
                         <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
               </Layout>
          </Chakra>
     );
}

export default Website;
