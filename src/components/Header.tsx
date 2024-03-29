import {
  Box,
  Flex,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import darkLogo from "../assets/Github-logo-dark.png";
import logo from "../assets/Github-logo.png";
import { BsLightbulbFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import SearchInput from "./SearchInput";
import About from "./About";
import "../stylings/Header.css";

interface Props {
  onSearch: (searchText: string) => void;
  onChangeGithubModeStatus: () => void;
}

const Header = ({ onSearch, onChangeGithubModeStatus }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const logoColor = colorMode === "light" ? logo : darkLogo;
  const headerBackground = colorMode === "light" ? "gray.100" : "gray.500";

  return (
    <>
      <Flex flexDirection={"row"} className="main-header" bg={headerBackground}>
        <LinkBox as="div" maxW="sm">
          <LinkOverlay
            href="" /* blank href causes page reload while href='#' causes default scroll to top */
          >
            <HStack>
              <Image
                boxSize={"78px"}
                src={logoColor}
                objectFit="contain"
                alt="Github logo"
              />
              <Text className="kanit-font-heading">Viewer</Text>
            </HStack>
          </LinkOverlay>
        </LinkBox>
        <Box flex={1} paddingY={"25px"} paddingX={"10%"}>
          <SearchInput onSearch={onSearch} />
        </Box>
        <HStack alignItems={"center"}>
          <About changeGithubModeStatus={onChangeGithubModeStatus} />
          <BsLightbulbFill />
          <Switch
            colorScheme="whatsapp"
            onChange={toggleColorMode}
            isChecked={colorMode === "dark"}
            size={"lg"}
          ></Switch>
          <BsMoonFill />
        </HStack>
      </Flex>
    </>
  );
};

export default Header;
