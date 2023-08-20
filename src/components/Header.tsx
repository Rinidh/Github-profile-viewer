import { Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import darkLogo from "../assets/Github-logo-dark.png";
import logo from "../assets/Github-logo.png";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const logoColor = colorMode === "light" ? logo : darkLogo;

  return (
    <>
      <HStack justifyContent="space-between">
        <HStack>
          <Image boxSize={"78px"} src={logoColor} objectFit="contain" />;
          <Text className="kanit-font-heading">Viewer</Text>
        </HStack>
        <Button onClick={toggleColorMode} colorScheme="blue">
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </HStack>
    </>
  );
};

export default Header;
