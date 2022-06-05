import Head from "next/head";
import dynamic from "next/dynamic";

import { Box, Container } from "@chakra-ui/react";
import Footer from "../Footer";
import Header from "../Header";

const Main = ({ children, router }) => {
     return (
          <Box as="main" pb={8}>
               <Head>
                    <title>Takuya Matsuyama - Homepage</title>
               </Head>
               <Header path={router.asPath} />

               <Container maxW="1290px" pt={40}>
                    {children}

                    <Footer />
               </Container>
          </Box>
     );
};

export default Main;
