import {
  Box,
  Center,
  Flex,
  Link,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaCopyright } from "react-icons/fa";
import Form from "./Form";

const Footer = () => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "light" ? "green.800" : "green.200";
  const backGround = colorMode === "light" ? "gray.100" : "gray.500";

  return (
    // Passing `columns={[1, null, 2]}` and `columns={{sm: 1, md: 2}}` will have the same effect.
    <Box bg={backGround} color={textColor}>
      <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing="3px" height={"180px"}>
        <Box height={"100%"}>
          <Text padding={5}>
            This App was made as a practice for testing react coding skills,
            along with Chakra UI and other libraries like react-hook-forms,
            styled-components, octokit etc. Please help improve dummy app and
            feel free to play around with anything... Try testing this app when
            you are offline; try searching for non-existent github users etc and
            see the reaction of the app
          </Text>
        </Box>
        <Center height={"100%"}>
          <Form />
        </Center>
      </SimpleGrid>

      <Box height="80px" textAlign={"center"}>
        <Text display={"block"} paddingTop={6} fontSize={"2xl"}>
          Made by{" "}
          <Link href="https://github.com/Rinidh" isExternal>
            Rinidh
          </Link>
        </Text>
      </Box>

      <Center>
        <Flex flexDirection={"row"}>
          <FaCopyright />
          <Box marginLeft={3} marginTop={-1}>
            <Text>Copyright 2023</Text>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default Footer;
