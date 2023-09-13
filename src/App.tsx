import { Box, ColorModeProvider, Grid, GridItem, Show } from "@chakra-ui/react";

import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import Blank from "./components/Blank";
import "./App.css";
import LeftPanel from "./components/LeftPanel";
import { useUsers } from "./hooks/useUsers";
import UserProfileContainer from "./components/UserProfileContainer";
import { GithubModeContext } from "./components/GithubModeContext";

interface UserQuery {
  //add more props here that hold user's search-query
  searchText: string;
}

function App() {
  const [userQuery, setUserQuery] = useState<UserQuery>({} as UserQuery);
  const [githubMode, setGithubMode] = useState(false);

  const { user, isLoading, error, dataSet } = useUsers(
    userQuery.searchText,
    githubMode
  );

  const mainContent = userQuery.searchText ? (
    <UserProfileContainer
      user={user}
      isLoading={isLoading}
      searchText={userQuery.searchText}
      error={error}
      githubMode={githubMode}
    />
  ) : (
    <Blank />
  );

  return (
    <ColorModeProvider /* to enable using useColorMode() hook. The hook works even though you don't put this */
    >
      <GithubModeContext.Provider value={githubMode}>
        <Grid
          templateAreas={{
            base: `"header" "main" "footer"`,
            lg: `"header header"
                  "nav main"
                  "nav footer"`,
          }}
          gridTemplateRows={{
            base: "100px 1fr 100px",
            lg: "100px 1fr 100px",
          }}
          gridTemplateColumns={{
            base: "1fr",
            lg: "240px 1fr",
          }}
        >
          <GridItem area={"header"}>
            <Header
              onSearch={(searchInputText) =>
                setUserQuery({ ...userQuery, searchText: searchInputText })
              }
              onChangeGithubModeStatus={() => setGithubMode(!githubMode)}
            />
          </GridItem>
          <Show above="lg" /* to show at size lg and above */>
            <GridItem area={"nav"}>
              <LeftPanel
                dataSet={dataSet}
                showWhen={Boolean(userQuery.searchText)} //only display left panel heading when a user is found
              />
            </GridItem>
          </Show>
          <GridItem pl="2" area={"main"} p={10}>
            <Box minHeight="540px" py={10}>
              {mainContent}
            </Box>
          </GridItem>
          <GridItem pl="2" bg="blue.300" area={"footer"}>
            <Form />
          </GridItem>
        </Grid>
      </GithubModeContext.Provider>
    </ColorModeProvider>
  );
}

export default App;
