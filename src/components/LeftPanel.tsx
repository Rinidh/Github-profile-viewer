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
  login: string;
  avatarImg: string;
}

const LeftPanel = ({
  dataSet,
  showHeading,
  fetchedUserName,
  onLeftPanelBoxClick,
}: Props) => {
  const [activeBox, setActiveBox] = useState("");

  // let fetchedUsersList: FetchedUsersList[] = [];
  // dataSet.forEach((user) => {
  //   if (
  //     !fetchedUsersList.includes({
  //       name: user.name, //pass user.login if user.name is null
  //       login: user.login,
  //       avatarImg: user.avatar_url,
  //     })
  //   ) {
  //     fetchedUsersList.push({
  //       name: user.name,
  //       login: user.login,
  //       avatarImg: user.avatar_url,
  //     }); //name is set to the login-name at github if there is no user name eg for "jeetd"
  //   }
  // });

  useEffect(() => {
    setActiveBox(fetchedUserName);
  }, [fetchedUserName]);

  const handleBoxClick = (searchAgainName: string) => {
    setActiveBox(searchAgainName);
    onLeftPanelBoxClick(searchAgainName);
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
        {/* {fetchedUsersList.map((userObj) => (
          <LeftPanelBox
            key={userObj.login}
            name={userObj.name || userObj.login}
            avatarImg={userObj.avatarImg}
            onBoxClick={() => handleBoxClick(userObj.login)}
            isActive={userObj.login == activeBox}
          />
        ))} */}
        {Array.from(dataSet).map(
          //to make the set into an array of objects
          (
            userObj //always use ( ) instead of { } braces to "return" values from an arrow func. If using { }, then put the return key word
          ) => (
            <LeftPanelBox
              key={userObj.login}
              name={userObj.name || userObj.login}
              avatarImg={userObj.avatar_url}
              onBoxClick={() => handleBoxClick(userObj.login)}
              isActive={userObj.login == activeBox}
            />
          )
        )}
      </Stack>
    </div>
  );
};

export default LeftPanel;
