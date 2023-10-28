import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { FiMoon, FiSun } from "react-icons/fi";


const ToggleLightDark = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button
            onClick={() => toggleColorMode()}
            pos="absolute"
            top="0"
            right="0"
            m="1rem"
        >
            {colorMode === "dark" ? (
                <FiSun color="orange.200" />
            ) : (
                <FiMoon color="blue.700" />
            )}
        </Button>
    );
};

export default ToggleLightDark;