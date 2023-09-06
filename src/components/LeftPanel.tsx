import {
  Avatar,
  Center,
  Flex,
  Heading,
  Stack,
  useColorMode,
  Text,
  Box,
} from "@chakra-ui/react";
import { User } from "../hooks/useUsers";
import LeftPanelBox from "./LeftPanelBox";

interface Props {
  dataSet: Set<User>; //dataSet is of type: a js set holding user-type objects
}

const LeftPanel = ({ dataSet }: Props) => {
  return (
    <>
      <Center marginLeft={5} marginBottom={2}>
        <Heading fontFamily={"kanit"} size={"lg"}>
          Recent
        </Heading>
      </Center>
      <Stack direction="column-reverse" marginLeft={5}>
        <LeftPanelBox name="Name 🙂" avatarImg={null} />
      </Stack>
    </>
  );
};

export default LeftPanel;
