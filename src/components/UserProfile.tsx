import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Skeleton,
} from "@chakra-ui/react";
import { useUsers } from "../hooks/useUsers";
import { BsLink45Deg } from "react-icons/bs";

import { Divider } from "./Divider";
import "../userGrid.css";

interface Props {
  searchText: string;
}

function UsersGrid({ searchText }: Props) {
  const { user, isLoading } = useUsers(searchText);

  const created_at_date = new Date(user.created_at);

  const fadeDuration = 0.5;

  const rowSpanForBio = user.bio?.length > 100 ? 2 : 1;

  return (
    <Grid
      templateColumns={{
        base: "repeat(3, 1fr)",
        lg: "repeat(5, 1fr)",
      }}
      templateRows="repeat(9, 100px)"
      gap={2}
    >
      <GridItem colSpan={2} rowSpan={4} /* the user image */>
        <Center h={"100%"}>
          <Skeleton
            isLoaded={!isLoading}
            fadeDuration={fadeDuration}
            borderRadius={100}
          >
            <Image
              src={user.avatar_url}
              boxSize={{ base: 250, lg: 300 }}
              borderRadius={100}
              border={"1px solid black"}
            />
          </Skeleton>
        </Center>
      </GridItem>
      <GridItem colSpan={3}>
        <Skeleton isLoaded={!isLoading} fadeDuration={fadeDuration}>
          <Heading as={"h1"} size={"3xl"} textAlign={"center"}>
            Profile
          </Heading>
        </Skeleton>
      </GridItem>
      <GridItem colSpan={3}>
        <Skeleton isLoaded={!isLoading} fadeDuration={fadeDuration}>
          <HStack>
            <Text fontSize={"5xl"} py={1} marginRight={10}>
              {user.name}
            </Text>
            <Text opacity={0.5} fontSize={"3xl"} paddingTop={3}>
              {user.login}
            </Text>
          </HStack>
        </Skeleton>
        <Divider /* renders an hr elem */ />
      </GridItem>
      <GridItem colSpan={3}>
        <Stack direction={"row"}>
          <Box marginRight={20}>
            <Skeleton isLoaded={!isLoading} fadeDuration={fadeDuration}>
              <Text fontSize={"2xl"} className="info-heading">
                Following
              </Text>
              <Text fontSize={"5xl"}>{user.following}</Text>
            </Skeleton>
          </Box>
          <Box>
            <Skeleton isLoaded={!isLoading} fadeDuration={fadeDuration}>
              <Text fontSize={"2xl"} className="info-heading">
                Followers
              </Text>
              <Text fontSize={"5xl"}>{user.followers}</Text>
            </Skeleton>
          </Box>
        </Stack>
      </GridItem>
      <GridItem colSpan={3}>
        <Box>
          <Skeleton isLoaded={!isLoading} fadeDuration={fadeDuration}>
            <Text fontSize={"2xl"} className="info-heading">
              Created
            </Text>
            <Text
              fontSize={"5xl"}
            >{`${created_at_date.getDate()}/${created_at_date.getMonth()}/${created_at_date.getFullYear()}`}</Text>
          </Skeleton>
        </Box>
      </GridItem>

      <GridItem
        colSpan={2}
        rowStart={5}
        rowEnd={10} /* extra row span below image */
      ></GridItem>
      <GridItem colSpan={3}>
        <Box>
          <Skeleton isLoaded={!isLoading} fadeDuration={fadeDuration}>
            <Text fontSize={"2xl"} className="info-heading">
              Public Repos
            </Text>
            <Text fontSize={"5xl"} marginBottom={4}>
              {user.public_repos ? user.public_repos : "None yet"}
            </Text>
          </Skeleton>
          <Divider />
        </Box>
      </GridItem>
      <GridItem colSpan={3} rowSpan={rowSpanForBio}>
        <Box>
          <Skeleton isLoaded={!isLoading} fadeDuration={fadeDuration}>
            <Text fontSize={"2xl"} className="info-heading" marginTop={10}>
              Bio
            </Text>
            <Text fontSize={"3xl"} noOfLines={3}>
              {user.bio ? user.bio : "No uploaded biography"}
            </Text>
          </Skeleton>
        </Box>
      </GridItem>

      <GridItem colSpan={3}>
        <Box marginTop={5}>
          <Skeleton isLoaded={!isLoading} fadeDuration={fadeDuration}>
            <Text fontSize={"2xl"} className="info-heading">
              Twitter
            </Text>
            <Text fontSize={"3xl"}>
              {user.twitter_username ? user.twitter_username : "No Twitter ID"}
            </Text>
          </Skeleton>
        </Box>
      </GridItem>
      <GridItem colSpan={3}>
        <Box>
          <Skeleton isLoaded={!isLoading} fadeDuration={fadeDuration}>
            <Text fontSize={"2xl"} className="info-heading">
              Link
            </Text>
            <Link href={user.html_url} isExternal>
              <HStack>
                <Text fontSize={"2xl"}>
                  <BsLink45Deg />
                </Text>
                <Text fontSize={"3xl"}>Visit {user.name} at Github</Text>
              </HStack>
            </Link>
          </Skeleton>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default UsersGrid;
