import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Container,
  Heading,
  Link,
  LinkBox,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Repo } from "../hooks/useRepos";
import "../stylings/RepoCard.css";
import { Divider } from "./Divider";

interface Props {
  repo: Repo;
}

const RepoCard = ({ repo }: Props) => {
  const createdAt = (timeStamp: string) => {
    const date = new Date(timeStamp);
    return `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;
  };

  if (repo)
    return (
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton
            width={"container.lg"} //renders lg (large) size in relation to the container it is in ie AccordionItem
            height={200}
            borderRadius={30}
            marginY={5}
          >
            <LinkBox w={"100%"} h={"100%"} className="position-relative">
              <Heading size={"2xl"} className="heading">
                <Link href={repo.html_url}>{repo.name}</Link>
              </Heading>

              <Tag
                size={"md"}
                variant="solid"
                colorScheme="green"
                className="language-tag"
              >
                {repo.language}
              </Tag>

              <Text fontSize={"md"} className="created-at">
                {createdAt(repo.created_at)}
              </Text>

              <Badge
                variant={"outline"}
                colorScheme="green"
                fontSize={20}
                className="branch-name"
              >
                {repo.default_branch}
              </Badge>
            </LinkBox>
            <AccordionIcon boxSize={"50px"} />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Container marginBottom={6}>
              {repo.description ? (
                <Text fontFamily={"kanit"} fontSize={"20px"} noOfLines={2}>
                  {repo.description}
                </Text>
              ) : (
                <Text fontFamily={"kanit"} fontSize={"20px"}>
                  No description
                </Text>
              )}
            </Container>
            <Divider />
            <Box marginTop={6}>
              <Text fontSize={"20px"}>Last updated at: {repo.updated_at}</Text>
              <Text fontSize={"20px"}>Number of watchers: {repo.watchers}</Text>
              <Text fontSize={"20px"}>
                License: {repo.license?.name || "Not licensed"}
              </Text>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
};

export default RepoCard;
