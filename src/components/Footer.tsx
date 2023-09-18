import {
  Box,
  Center,
  Link,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "light" ? "green.800" : "green.200";

  return (
    // Passing `columns={[1, null, 2]}` and `columns={{sm: 1, md: 2}}` will have the same effect.
    <>
      <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing="3px" height={"130px"}>
        <Box bg={"lightpink"} height={"100%"}>
          <Text paddingTop={5} color={textColor}>
            This App was made as a practice for testing react coding skills,
            along with Chakra UI and other libraries like react-hook-forms,
            styled-components, octokit etc. Please help improve dummy app and
            feel free to play around with anything... Try testing this app when
            you are offline; try searching for non-existent github users etc and
            see the reaction of the app
          </Text>
        </Box>
        <Box bg={"lightblue"} height={"100%"}>
          b
        </Box>
      </SimpleGrid>

      <Box bg="teal" height="80px" textAlign={"center"}>
        <Text display={"block"} paddingTop={6} fontSize={"2xl"}>
          Made by{" "}
          <Link href="https://github.com/Rinidh" isExternal>
            Rinidh
          </Link>
        </Text>
      </Box>

      <Center>
        <Box className="copyright-container">
          <FaCopyright />
          <Text>Copyright 2023</Text>
        </Box>
      </Center>
    </>
  );
};

export default Footer;
