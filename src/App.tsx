import { Box, Grid, GridItem, Show } from "@chakra-ui/react";

import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import BlankProfile from "./components/BlankProfile";
import "./App.css";
import { InfoTabs } from "./components/InfoTabs";

interface UserQuery {
  searchText: string;
}

function App() {
  const [userQuery, setUserQuery] = useState<UserQuery>({} as UserQuery);

  return (
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
        lg: `"header header"
              "nav main"
              "nav footer"`,
      }}
      gridTemplateRows={{
        base: "100px 1fr 20px",
        lg: "100px 1fr 20px",
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "210px 1fr",
      }}
    >
      <GridItem pt="1" area={"header"} p={3}>
        <Header
          onSearch={(searchInputText) =>
            setUserQuery({ ...userQuery, searchText: searchInputText })
          }
        />
      </GridItem>
      <Show above="lg" /* to show at size lg and above */>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          <Form />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"} p={10}>
        <Box minHeight="540px" py={10}>
          {!userQuery.searchText && <BlankProfile />}
          {userQuery.searchText && (
            <InfoTabs
              searchText={
                userQuery.searchText
              } /* searchText to be passed to the UserProfile */
            />
          )}
        </Box>
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
