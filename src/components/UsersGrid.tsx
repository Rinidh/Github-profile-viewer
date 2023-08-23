import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import UserCard from "./UserCard";

function UsersGrid() {
  return (
    <SimpleGrid>
      <UserCard />
    </SimpleGrid>
  );
}

export default UsersGrid;
