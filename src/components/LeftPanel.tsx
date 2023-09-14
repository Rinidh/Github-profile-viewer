import { Center, Divider, Heading, Stack } from "@chakra-ui/react";
import { User } from "../hooks/useUsers";
import LeftPanelBox from "./LeftPanelBox";
import "../stylings/LeftPanel.css";
import { useEffect, useState } from "react";

interface Props {
  dataSet: Set<User>; //dataSet is of type: a js set holding user-type objects
  showHeading: boolean;
  fetchedUserName: string;
  onLeftPanelBoxClick: (name: string) => void;
}

interface FetchedUsersList {
  name: string;
  avatarImg: string;
}

const LeftPanel = ({
  dataSet,
  showHeading,
  fetchedUserName,
  onLeftPanelBoxClick,
}: Props) => {
  const [activeBox, setActiveBox] = useState("");

  let fetchedUsersList: FetchedUsersList[] = [];
  dataSet.forEach((user) => {
    if (
      !fetchedUsersList.includes({
        name: user.name || user.login, //pass user.login if user.name is null
        avatarImg: user.avatar_url,
      })
    ) {
      fetchedUsersList.push({
        name: user.name || user.login,
        avatarImg: user.avatar_url,
      }); //name is set to the login-name at github if there is no user name eg for "jeetd"
    }
  });

  useEffect(() => {
    setActiveBox(fetchedUserName);
  }, [fetchedUserName]);

  const handleBoxClick = (name: string) => {
    setActiveBox(name);
    onLeftPanelBoxClick(name);
  };

  return (
    <div className="position-fixed">
      <Center
        marginLeft={5}
        marginBottom={2}
        className="position-absolute-head"
      >
        <Heading fontFamily={"kanit"} size={"lg"}>
          {showHeading === true && "Recent"}
        </Heading>
      </Center>
      <Stack
        direction="column-reverse"
        marginLeft={5}
        className="position-absolute-list"
      >
        {fetchedUsersList.map((userObj) => (
          <LeftPanelBox
            key={userObj.name}
            name={userObj.name}
            avatarImg={userObj.avatarImg}
            onBoxClick={() => handleBoxClick(userObj.name)}
            isActive={userObj.name == activeBox}
          />
        ))}
      </Stack>
    </div>
  );
};

export default LeftPanel;
