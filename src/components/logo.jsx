import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
     font-weight: bold;
     font-size: 18px;
     display: inline-flex;
     align-items: center;
     height: 30px;
     line-height: 20px;
     padding: 10px;
`;

const Logo = () => {
     // const footPrintImg = `/images/footprint${useColorModeValue(
     //      "",
     //      "-dark"
     // )}.png`;
     const footPrintImg = `/internom.png`;
     return (
          <Link href="/" scroll={false}>
               <a>
                    <LogoBox>
                         <Image
                              src={footPrintImg}
                              width={137}
                              height={27}
                              alt="logo"
                              // layout="responsive"
                         />
                         {/* <Text
                              color={useColorModeValue(
                                   "gray.800",
                                   "whiteAlpha.900"
                              )}
                              fontFamily='M PLUS Rounded 1c", sans-serif'
                              fontWeight="bold"
                              ml={3}
                         >
                              Takuya Matsuyama
                         </Text> */}
                    </LogoBox>
               </a>
          </Link>
     );
};

export default Logo;
