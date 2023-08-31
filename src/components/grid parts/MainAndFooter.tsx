import { Box, GridItem } from "@chakra-ui/react";
import React from "react";
import BlankProfile from "../BlankProfile";

const MainAndFooter = () => {
  return (
    <>
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
    </>
  );
};

export default MainAndFooter;
