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

interface Props {
  changeGithubModeStatus: () => void;
}

function About({ changeGithubModeStatus }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <AboutModeInfo changeGithubModeStatus={changeGithubModeStatus} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default About;
