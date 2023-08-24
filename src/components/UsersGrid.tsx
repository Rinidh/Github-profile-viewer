import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useUsers } from "../hooks/useUsers";
import { BsLink45Deg } from "react-icons/bs";

interface Props {
  searchText: string;
}

function UsersGrid({ searchText }: Props) {
  const user = useUsers(searchText);

  const created_at_date = new Date(user.created_at);

  return (
    <Grid
      bg={"blue.800"}
      templateColumns={{
        base: "repeat(3, 1fr)",
        lg: "repeat(5, 1fr)",
      }}
      templateRows="repeat(9, 100px)"
      gap={2}
    >
      <GridItem bg={"tomato"} colSpan={2} rowSpan={4} /* the user image */>
        <Center bg={"yellow.700"} h={"100%"}>
          <Image
            src={user.avatar_url}
            boxSize={{ base: 250, lg: 300 }}
            borderRadius={100}
          />
        </Center>
      </GridItem>
      <GridItem bg={"yellow.400"} colSpan={3}>
        <Heading as={"h1"} size={"3xl"} textAlign={"center"}>
          Profile
        </Heading>
      </GridItem>
      <GridItem bg={"honeydew"} colSpan={3}>
        <Text fontSize={"5xl"} py={1}>
          {user.name}
        </Text>
        <Divider /* renders an hr elem */ />
      </GridItem>
      <GridItem bg={"teal.700"} colSpan={3}>
        <Stack direction={"row"}>
          <Box marginRight={20}>
            <Text fontSize={"2xl"}>Following</Text>
            <Text fontSize={"5xl"}>{user.following}</Text>
          </Box>
          <Divider orientation="vertical" />
          <Box>
            <Text fontSize={"2xl"}>Followers</Text>
            <Text fontSize={"5xl"}>{user.followers}</Text>
          </Box>
        </Stack>
      </GridItem>
      <GridItem bg={"honeydew"} colSpan={3}>
        <Box>
          <Text fontSize={"2xl"}>Created</Text>
          <Text
            fontSize={"5xl"}
          >{`${created_at_date.getDate()}/${created_at_date.getMonth()}/${created_at_date.getFullYear()}`}</Text>
        </Box>
      </GridItem>

      <GridItem
        bg={"teal.700"}
        colSpan={2}
        rowStart={5}
        rowEnd={10} /* extra row span below image */
      ></GridItem>
      <GridItem bg={"yellow.400"} colSpan={3}>
        <Box>
          <Text fontSize={"2xl"}>Public Repos</Text>
          <Text fontSize={"5xl"}>
            {user.public_repos ? user.public_repos : "None yet"}
          </Text>
        </Box>
      </GridItem>
      <GridItem bg={"honeydew"} colSpan={3} rowSpan={2}>
        <Box>
          <Text fontSize={"2xl"}>Bio</Text>
          <Text fontSize={"3xl"} noOfLines={3}>
            {user.bio}
          </Text>
        </Box>
      </GridItem>

      <GridItem bg={"teal.700"} colSpan={3}>
        <Box>
          <Text fontSize={"2xl"}>Twitter</Text>
          <Text fontSize={"3xl"}>
            {user.twitter_username ? user.twitter_username : "No Twitter ID"}
          </Text>
        </Box>
      </GridItem>
      <GridItem bg={"yellow.400"} colSpan={3}>
        <Box>
          <Text fontSize={"2xl"}>Link</Text>
          <Link href={user.html_url} isExternal>
            <HStack>
              <Text fontSize={"2xl"}>
                <BsLink45Deg />
              </Text>
              <Text fontSize={"3xl"}>Visit {user.name} at Github</Text>
            </HStack>
          </Link>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default UsersGrid;
