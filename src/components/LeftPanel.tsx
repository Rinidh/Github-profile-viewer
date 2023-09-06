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

interface FetchedUsersList {
  name: string;
  avatarImg: string;
}

const LeftPanel = ({ dataSet }: Props) => {
  let fetchedUsersList: FetchedUsersList[] = [];
  dataSet.forEach((user) =>
    fetchedUsersList.push({ name: user.name, avatarImg: user.avatar_url })
  );

  return (
    <>
      <Center marginLeft={5} marginBottom={2}>
        <Heading fontFamily={"kanit"} size={"lg"}>
          Recent
        </Heading>
      </Center>
      <Stack direction="column-reverse" marginLeft={5}>
        {fetchedUsersList.map((userObj) => (
          <LeftPanelBox name={userObj.name} avatarImg={userObj.avatarImg} />
        ))}
      </Stack>
    </>
  );
};

export default LeftPanel;
