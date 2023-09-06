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
import { User } from "../hooks/useUsers";

interface Props {
  user: User;
  isLoading: boolean;
  searchText: string;
}

function InfoTabs({ user, isLoading, searchText }: Props) {
  //usually you should declare a state var here, to see if the user is at the profile tab or repos tab, and only render the repos tab when the user clicks on it

  return (
    <Tabs isFitted variant="unstyled" align="center">
      <TabList mb="1em">
        <Tab>Profile</Tab>
        <Tab>Public Repositories</Tab>
      </TabList>
      <TabIndicator height="3px" bg="green.400" />
      <TabPanels>
        <TabPanel textAlign={"start"}>
          <UserProfile user={user} isLoading={isLoading} />
        </TabPanel>
        <TabPanel>
          <ReposList searchText={searchText} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export { InfoTabs };
