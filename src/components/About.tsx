import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Switch,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { BsQuestionOctagonFill } from "react-icons/bs";
import styled from "styled-components";

const StyledInlineHeading = styled.p`
  display: inline-block;
  font-size: 25px;
`; //used this coz the <Text> comp of Chakra has unchangeable display: block style, yet inline-block is needed

interface Props {
  onActivateGithubMode: () => void;
  githubMode: boolean;
}

function About({ onActivateGithubMode }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <>
      <Button
        onClick={onOpen}
        children={<BsQuestionOctagonFill />}
        size={"lg"}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader fontSize={30} textAlign={"center"}>
            About this App
          </DrawerHeader>

          <DrawerBody>
            <Text textAlign={"center"} fontSize={20}>
              This is a mini practice web app that fetches github profile and
              repositories information after inputting the user-name the name
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Box
              bg={colorMode === "light" ? "#ffcdde" : "#710d0d"}
              borderRadius={20}
              padding={3}
            >
              <Text fontSize={20} marginBottom={10}>
                You are currently running this app in demonstration mode. Any
                search will only return this project's owner's (Rinidh's) github
                info only
              </Text>

              <Box width={"190px"}>
                <StyledInlineHeading>
                  Activate Github Searches
                </StyledInlineHeading>
              </Box>
              <Switch
                colorScheme="red"
                size="md"
                float={"right"}
                marginTop={-12} //negative values for positioning
                onChange={onActivateGithubMode}
              />
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default About;
