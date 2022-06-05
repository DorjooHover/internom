import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Nav from "./nav";
import Navbar from "./navbar";

export default function Header(props) {
     return (
          <Box
               position="fixed"
               w="100%"
               {...props}
               wrap="wrap"
               display={"flex"}
          >
               <Container maxW="100%" p={0}>
                    <Box
                         borderTop="1px"
                         borderBottom="1px"
                         borderColor="globalBorderColor"
                         borderStyle={"solid"}
                    >
                         <Nav path={props} />
                    </Box>
                    <Box bg={useColorModeValue("#ffffff40", "#20202380")}>
                         <Navbar path={props} />
                    </Box>
               </Container>
          </Box>
     );
}
