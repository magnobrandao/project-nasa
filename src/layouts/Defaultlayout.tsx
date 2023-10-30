import React, { ReactNode } from "react";
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
} from "@chakra-ui/react";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { JsxElement } from "typescript";
import { Link, Navigate } from "react-router-dom";

interface LinkItemProps extends FlexProps {
    name: string;
    icon: IconType;
    url: string;
}
const LinkItems: Array<LinkItemProps> = [
    { name: "Home", icon: FiHome, url: "/" },
    { name: "Trending", icon: FiSettings, url: "/trending" },
    { name: "Explore", icon: FiCompass, url: "/" },
    { name: "Favourites", icon: FiStar, url: "/" },
    { name: "Settings", icon: FiSettings, url: "/" },
];

interface DefaultLayoutProps {
    children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box h="100%" width="100%" bg="linear-gradient(to top, #283E51, #0A2342)">
            <Box
                minH="100vh"
                top={0}
                left={0}
                right={0}
                bottom={0}
                width="100%"
                height="100%"
                display="block"
                bg="url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center"
                zIndex={0}
                bgSize="cover" // Define o tamanho de fundo para cobrir o contêiner
                bgPosition="top center" // Define a posição de fundo
                backgroundRepeat="repeat"
            >
                <SidebarContent
                    onClose={() => onClose}
                    display={{ base: "none", md: "block" }}
                />
                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    returnFocusOnClose={false}
                    onOverlayClick={onClose}
                    size="full"
                >
                    <DrawerContent>
                        <SidebarContent onClose={onClose} />
                    </DrawerContent>
                </Drawer>
                {/* mobilenav */}
                <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
                <Box ml={{ base: 0, md: 60 }} p="4">
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bg="linear-gradient(to top, #283E51, #0A2342, rgba(0, 0, 0, 0.6))"
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: "60" }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text
                    fontSize="2xl"
                    fontFamily="monospace"
                    color="white"
                    fontWeight="bold"
                >
                    Magno
                </Text>
                <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
            </Flex>

            {LinkItems.map((link) => (
                <Link to={link.url}>
                    <NavItem color="white" icon={link.icon}>
                        {link.name}
                    </NavItem>
                </Link>
            ))}
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <Box
            as="a"
            href="#"
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "white",
                    color: "#5f5f5f",
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: "#5f5f5f",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg="linear-gradient(to top, #283E51, #0A2342, rgba(0, 0, 0, 0.7))"
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent="flex-start"
            {...rest}
        >
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                color="white"
                icon={<FiMenu />}
            />

            <Text
                fontSize="2xl"
                ml="8"
                fontFamily="monospace"
                color="white"
                fontWeight="bold"
            >
                Logo
            </Text>
        </Flex>
    );
};