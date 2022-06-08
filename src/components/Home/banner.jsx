import {
  Container,
  GridItem,
  SimpleGrid,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
const HomeBanner = () => {
  return (
    <>
      <Container w="100%" maxW={"100%"} py={"80px"}>
        <SimpleGrid columns={[1, 2, 4]} gap={24}>
          <GridItem>
            <Box h={"93px"} position="relative" mb={6} zIndex={"-1"}>
              <Image
                src={"/img/home_1_1.jpg"}
                layout="fill"
                objectFit="contain"
              />
            </Box>
            <Heading as={"h3"} size="md" textAlign={"center"} mt={4}>
              Selection
            </Heading>
            <Text textAlign={"center"} fontSize={"md"}>
              We have more than 13 million titles to choose from, from the
              earliest board books to the all-time classics.{" "}
            </Text>
          </GridItem>
          <GridItem>
            <Box h={"93px"} position="relative" mb={6} zIndex={"-1"}>
              <Image
                src={"/img/home_1_1.jpg"}
                layout="fill"
                objectFit="contain"
              />
            </Box>
            <Heading as={"h3"} size="md" textAlign={"center"} mt={4}>
              Selection
            </Heading>
            <Text textAlign={"center"} fontSize={"md"}>
              We have more than 13 million titles to choose from, from the
              earliest board books to the all-time classics.{" "}
            </Text>
          </GridItem>
          <GridItem>
            <Box h={"93px"} position="relative" mb={6} zIndex={"-1"}>
              <Image
                src={"/img/home_1_1.jpg"}
                layout="fill"
                objectFit="contain"
              />
            </Box>
            <Heading as={"h3"} size="md" textAlign={"center"} mt={4}>
              Selection
            </Heading>
            <Text textAlign={"center"} fontSize={"md"}>
              We have more than 13 million titles to choose from, from the
              earliest board books to the all-time classics.{" "}
            </Text>
          </GridItem>
          <GridItem>
            <Box h={"93px"} position="relative" mb={6} zIndex={"-1"}>
              <Image
                src={"/img/home_1_1.jpg"}
                layout="fill"
                objectFit="contain"
              />
            </Box>
            <Heading as={"h3"} size="md" textAlign={"center"} mt={4}>
              Selection
            </Heading>
            <Text textAlign={"center"} fontSize={"md"}>
              We have more than 13 million titles to choose from, from the
              earliest board books to the all-time classics.{" "}
            </Text>
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default HomeBanner;
