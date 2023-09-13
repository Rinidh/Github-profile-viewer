import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BsQuestionOctagonFill } from "react-icons/bs";
import AboutModeInfo from "./AboutModeInfo";
//import { useContext } from "react";

interface Props {
  changeGithubModeStatus: () => void;
  githubMode: boolean; //accessing githubMode status via props instead of useContext
}

function About({ changeGithubModeStatus, githubMode }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const githubModeContext = useContext(GithubModeContext); ???
  // console.log(githubModeContext); //"unknown" ???

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
            <AboutModeInfo
              changeGithubModeStatus={changeGithubModeStatus}
              githubMode={githubMode}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default About;
