import { Box, SimpleGrid } from "@chakra-ui/react";
import CategoryTitle from "../categoryTitle";
import { ProductCategory } from "../layouts/products";

const HomeCategory = () => {
  return (
    <Box mb={16}>
      <CategoryTitle title={"Shop by Category "} />
      <SimpleGrid columns={3} spacing={6}>
        <ProductCategory />
        <ProductCategory />
        <ProductCategory />
        <ProductCategory />
        <ProductCategory />
        <ProductCategory />
      </SimpleGrid>
    </Box>
  );
};

export default HomeCategory;
