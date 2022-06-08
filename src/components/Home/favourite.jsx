import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import CategoryTitle from "../categoryTitle";
import { ProductSecondList } from "../layouts/products";
const HomeFavourite = () => {
  return (
    <Box mb={16}>
      <CategoryTitle title={"Our Favourite Reads"} />
      <SimpleGrid columns={3} spacing={4}>
        <ProductSecondList />
        <ProductSecondList />
        <ProductSecondList />
        <ProductSecondList />
        <ProductSecondList />
        <ProductSecondList />
        <ProductSecondList />
        <ProductSecondList />
        <ProductSecondList />
      </SimpleGrid>
    </Box>
  );
};

export default HomeFavourite;
