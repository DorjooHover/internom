import NextLink from "next/link";
import {
     Container,
     Box,
     Link,
     Stack,
     Heading,
     Flex,
     Menu,
     MenuItem,
     MenuList,
     MenuButton,
     IconButton,
     useColorModeValue,
     ListItem,
} from "@chakra-ui/react";
import { HamburgerIcon, PhoneIcon } from "@chakra-ui/icons";
// import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaBeer } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const LinkItem = ({ href, path, target, children, ...props }) => {
     const active = path === href;
     const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
     return (
          <NextLink href={href} passHref scroll={false}>
               <Link
                    p={2}
                    bg={active ? "grassTeal" : undefined}
                    color={active ? "#202023" : inactiveColor}
                    target={target}
                    {...props}
               >
                    {children}
               </Link>
          </NextLink>
     );
};

const Nav = (props) => {
     const { path } = props;

     return (
          <Box
               position="relative"
               as="nav"
               w="100%"
               css={{ backdropFilter: "blur(10px)" }}
               zIndex={1}
               {...props}
          >
               <Container
                    display="flex"
                    px={6}
                    py={2}
                    maxW="1290px"
                    wrap="wrap"
                    align="center"
                    justify="space-between"
               >
                    <Flex align="center" mr={5}>
                         <LinkItem href={"/"} path={path}>
                              <Heading as={"h5"} size="xs">
                                   Find a Book Store
                              </Heading>
                         </LinkItem>
                    </Flex>

                    <Stack
                         direction={{ base: "column", md: "row" }}
                         display={{ base: "none", md: "flex" }}
                         width={{ base: "full", md: "auto" }}
                         alignItems="center"
                         flexGrow={1}
                         mt={{ base: 4, md: 0 }}
                    >
                         <LinkItem
                              href="/"
                              path={path}
                              display="inline-flex"
                              alignItems="center"
                              style={{ gap: 4 }}
                              pl={2}
                         >
                              <PhoneIcon color={"mainColor"} />
                         </LinkItem>
                         <Heading as={"h5"} size="xs">
                              +1 840 - 841 25 69{" "}
                         </Heading>
                    </Stack>

                    <Box flex={1} align="right">
                         <Box display={{ base: "inline-block", md: "none" }}>
                              <Menu isLazy id="navbar-menu">
                                   <MenuButton
                                        as={IconButton}
                                        icon={<HamburgerIcon />}
                                        variant="outline"
                                        aria-label="Options"
                                   />
                                   <MenuList>
                                        <NextLink href="/" passHref>
                                             <MenuItem as={Link}>
                                                  About
                                             </MenuItem>
                                        </NextLink>
                                        <NextLink href="/works" passHref>
                                             <MenuItem as={Link}>
                                                  Works
                                             </MenuItem>
                                        </NextLink>
                                        <NextLink href="/posts" passHref>
                                             <MenuItem as={Link}>
                                                  Posts
                                             </MenuItem>
                                        </NextLink>
                                        <MenuItem
                                             as={Link}
                                             href="https://github.com/craftzdog/craftzdog-homepage"
                                        >
                                             View
                                        </MenuItem>
                                   </MenuList>
                              </Menu>
                         </Box>
                    </Box>
                    <Stack
                         direction={{ base: "column", md: "row" }}
                         display={{ base: "none", md: "flex" }}
                         width={{ base: "full", md: "auto" }}
                         alignItems="center"
                         mt={{ base: 4, md: 0 }}
                    >
                         <LinkItem
                              href="/"
                              path={path}
                              display="inline-flex"
                              alignItems="center"
                              style={{ gap: 4 }}
                              pl={2}
                         >
                              <BsFacebook />
                         </LinkItem>
                         <LinkItem
                              href="/"
                              path={path}
                              display="inline-flex"
                              alignItems="center"
                              style={{ gap: 4 }}
                              pl={2}
                         >
                              <BsInstagram />
                         </LinkItem>
                         <LinkItem
                              href="/"
                              path={path}
                              display="inline-flex"
                              alignItems="center"
                              style={{ gap: 4 }}
                              pl={2}
                         >
                              <BsTwitter />
                         </LinkItem>
                    </Stack>
               </Container>
          </Box>
     );
};

export default Nav;
