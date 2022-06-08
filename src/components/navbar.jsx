import Logo from "./logo";
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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { IoLogoGithub } from "react-icons/io5";
import { BiSearch, BiUser } from "react-icons/bi";
const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path.path === href;
  // const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  const { sub } = props;
  const { last } = props;
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        px={!sub == "true" ? 8 : 4}
        py={!sub == "true" ? 0 : 1}
        borderRight={!last == "true" && sub == "true" ? "1px" : ""}
        borderColor={"globalBorderColor"}
        // bg={active ? "grassTeal" : undefined}
        color={active ? "mainColor" : "#000"}
        target={target}
        fontWeight={active ? "bold" : "600"}
        textDecoration="none"
        {...props}
        mx={0}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      top="56px"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={6}
        maxW="1290px"
        wrap="wrap"
        align="center"
        justify="space-between"
        justifyContent={"space-between"}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Shop
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Pages
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Blog
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Contact
          </LinkItem>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          // mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            href="/"
            path={path}
            display="inline-flex"
            alignItems="center"
            fontSize={"20px"}
            sub={"true"}
            // style={{ gap: 4 }}
          >
            <BiSearch />
          </LinkItem>
          <LinkItem
            href="/"
            path={path}
            display="inline-flex"
            alignItems="center"
            fontSize={"20px"}
            sub={"true"}
            last={"true"}
            // style={{ gap: 4 }}
          >
            <BiUser />
          </LinkItem>
        </Stack>
        <ThemeToggleButton />
        <Box
          align="right"
          display={{
            base: "inline-block",
            md: "none",
          }}
        >
          <Box
            display={{
              base: "inline-block",
              md: "none",
            }}
          >
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/craftzdog/craftzdog-homepage"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
