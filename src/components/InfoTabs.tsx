import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import UserProfile from "./UserProfile";
import ReposList from "./ReposList";
import { UserContext } from "./context/UserContext";
import { useState } from "react";
import { User } from "../hooks/useUsers";

interface Props {
  searchText: string;
}

function InfoTabs({ searchText }: Props) {
  const [currentUser, setCurrentUser] = useState<User>({} as User);

  return (
    <UserContext.Provider value={currentUser}>
      <Tabs isFitted variant="unstyled" align="center">
        <TabList mb="1em">
          <Tab>Profile</Tab>
          <Tab>Repositories</Tab>
        </TabList>
        <TabIndicator height="3px" bg="green.400" />
        <TabPanels>
          <TabPanel textAlign={"start"}>
            <UserProfile
              searchText={searchText}
              onReceiveNewUser={(newUser) => setCurrentUser(newUser)}
            />
          </TabPanel>
          <TabPanel>
            <ReposList searchText={searchText} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </UserContext.Provider>
  );
}

export { InfoTabs };
