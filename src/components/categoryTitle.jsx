import { Stack, Divider, Heading, Button, Box } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
const CategoryTitle = ({ title }) => {
  return (
    <Stack direction={"row"} align="center" spacing={12} mb={5}>
      <Heading whiteSpace={"nowrap"}>{title} </Heading>
      <Divider />
      <Box
        as="button"
        borderRadius={"50px"}
        py={3}
        px={6}
        whiteSpace="nowrap"
        bg={"mainColor"}
        color={"white"}
        fontWeight={700}
        textTransform="capitalize"
        alignItems={"center"}
        display={"flex"}
        _hover={{
          svg: {
            transform: "translateX(10px)",
            transition: "0.3s",
          },
        }}
      >
        View all
        <ChevronRightIcon fontSize={"16px"} ml={1} transition="0.3s" />
      </Box>
    </Stack>
  );
};

export default CategoryTitle;
