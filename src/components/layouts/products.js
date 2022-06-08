import { Box, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import { ProductImage, ProductImgView } from "./images";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import { ChevronRightIcon, StarIcon } from "@chakra-ui/icons";
export const ProductSecondList = () => {
  return (
    <Box py={4} borderBottom={"1px"} display="flex">
      <ProductImage />
      <Stack w={"100%"}>
        <NextLink href={"/"}>
          <Link color={"#000"}>
            <Heading as="h4" size={"sm"} mb={2}>
              Life Flight
            </Heading>
          </Link>
        </NextLink>
        <Stack direction={"column"}>
          <Stack
            direction={"row"}
            spacing={0.5}
            align="center"
            pos={"relative"}
            mb={3}
          >
            <StarIcon color={"mainColor"} pos={"relative"} />
            <StarIcon color={"mainColor"} pos={"relative"} />
            <StarIcon color={"mainColor"} pos={"relative"} />
            <StarIcon color={"mainColor"} pos={"relative"} />
            <StarIcon color={"mainColor"} pos={"relative"} />
            <Heading as={"h6"} fontSize="14px" pl={2}>
              5
            </Heading>
          </Stack>
          <NextLink href={"/"}>
            <Link
              color={"globalBordercolor"}
              fontWeight={600}
              _hover={{ color: "mainColor" }}
              display={"contents"}
            >
              Misty Figueroa
            </Link>
          </NextLink>
          <Stack direction={"row"}>
            <Heading as="h4" fontSize={"20px"} color={"mainColor"}>
              $115.72
            </Heading>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
const titles = [
  "Historical Biographies",
  "Leaders & Notable",
  "Modern Biographies",
  "Sports Biographies",
  "United States Biographies ",
];
export const ProductCategory = () => {
  return (
    <Stack direction={"row"} py={4}>
      <ProductImgView />
      <Stack justify={"space-between"}>
        <Heading size={"md"} mb={1}>
          Biographies
        </Heading>
        {titles.map((t) => {
          return (
            <>
              <Text as={"p"} color={"#999"} fontSize={"12px"}>
                {t}
              </Text>
            </>
          );
        })}
        <NextLink href="/">
          <Link
            color={"#000"}
            fontWeight={600}
            align="center"
            display={"flex"}
            alignItems="center"
            transition={"0.3s"}
            _hover={{
              svg: { transform: "translateX(10px)", transition: "0.3s" },
              color: "mainColor",
              transition: "0.3s",
            }}
          >
            View More
            <ChevronRightIcon
              color={"mainColor"}
              ml={2}
              fontSize={"1rem"}
              transition={"0.3s"}
            />
          </Link>
        </NextLink>
      </Stack>
    </Stack>
  );
};
