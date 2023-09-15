import { Center, Heading, Stack } from "@chakra-ui/react";
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

const LeftPanel = ({
  dataSet,
  showHeading,
  fetchedUserName,
  onLeftPanelBoxClick,
}: Props) => {
  const [activeBox, setActiveBox] = useState("");

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
        {Array.from(dataSet).map(
          //to make the set into an array of objects
          (userObj) => (
            <LeftPanelBox
              key={userObj.id}
              name={userObj.name || userObj.login}
              avatarImg={userObj.avatar_url}
              onBoxClick={() => handleBoxClick(userObj.login)}
              isActive={userObj.login == activeBox}
            />
          ) //always use ( ) instead of { } braces to "return" values from an arrow func. If using { }, then put the return key word
        )}
      </Stack>
    </div>
  );
};

export default LeftPanel;
