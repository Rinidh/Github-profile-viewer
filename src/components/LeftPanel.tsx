import { Center, Heading, Stack } from "@chakra-ui/react";
import { User } from "../hooks/useUsers";
import LeftPanelBox from "./LeftPanelBox";

interface Props {
  dataSet: Set<User>; //dataSet is of type: a js set holding user-type objects
  showWhen: boolean;
}

interface FetchedUsersList {
  name: string;
  avatarImg: string;
}

const LeftPanel = ({ dataSet, showWhen }: Props) => {
  let fetchedUsersList: FetchedUsersList[] = [];
  dataSet.forEach(
    (user) =>
      fetchedUsersList.push({
        name: user.name || user.login,
        avatarImg: user.avatar_url,
      }) //name is set to the login-name at github if there is no user name eg for "jeetd"
  );

  return (
    <>
      <Center marginLeft={5} marginBottom={2}>
        <Heading fontFamily={"kanit"} size={"lg"}>
          {showWhen === true && "Recent"}
        </Heading>
      </Center>
      <Stack direction="column-reverse" marginLeft={5}>
        {fetchedUsersList.map((userObj) => (
          <LeftPanelBox
            key={userObj.name}
            name={userObj.name}
            avatarImg={userObj.avatarImg}
          />
        ))}
      </Stack>
    </>
  );
};

export default LeftPanel;
