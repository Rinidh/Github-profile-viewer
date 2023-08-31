import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import UserProfile from "./UserProfile";

interface Props {
  searchText: string;
}

function InfoTabs({ searchText }: Props) {
  return (
    <Tabs isFitted variant="unstyled" align="center">
      <TabList mb="1em">
        <Tab>Profile</Tab>
        <Tab>Repositories</Tab>
      </TabList>
      <TabIndicator height="3px" bg="green.400" />
      <TabPanels>
        <TabPanel textAlign={"start"}>
          <UserProfile searchText={searchText} />
        </TabPanel>
        <TabPanel>
          <p>The UserRepos component</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export { InfoTabs };
