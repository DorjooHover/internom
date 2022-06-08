import NextLink from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import { Box, Link } from "@chakra-ui/react";

export const ProductImage = () => {
  return (
    <NextLink href="/">
      <Link
        maxW={"80px"}
        position="relative"
        height={"112px"}
        maxH={"112px"}
        borderRadius="10px"
        width={"80px"}
        minW={"80px"}
        overflow={"hidden"}
        mr={8}
      >
        <Image
          src={"/img/product/felix.jpg"}
          alt="felix"
          layout="fill"
          objectFit="contain"
        />
      </Link>
    </NextLink>
  );
};

export const ProductImgView = () => {
  return (
    <Box
      w={"130px"}
      h={"182px"}
      pos="relative"
      borderRadius={"20px"}
      overflow="hidden"
      mr={8}
      minW={"130px"}
    >
      <Image
        src={"/img/product/felix.jpg"}
        alt="felix"
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};
