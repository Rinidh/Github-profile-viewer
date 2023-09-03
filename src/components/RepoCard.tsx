import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Repo } from "../hooks/useRepos";

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
          <AccordionButton bg={"red"}>
            <Card
              direction={"row"}
              variant={"filled"}
              width={"100%"}
              height={200}
              borderRadius={30}
              marginY={5}
              bg="yellow"
            >
              <CardHeader w={500}>
                <VStack gap={8}>
                  <Heading size={"2xl"}>{repo.name}</Heading>
                  <Badge variant={"outline"} colorScheme="green" fontSize={15}>
                    {repo.default_branch}
                  </Badge>
                </VStack>
              </CardHeader>

              <CardBody>
                <Box height={"70%"}>
                  {repo.description ? (
                    <Text fontFamily={"kanit"} fontSize={"20px"} noOfLines={2}>
                      {repo.description}
                    </Text>
                  ) : (
                    <Text fontFamily={"kanit"} fontSize={"20px"}>
                      No description
                    </Text>
                  )}
                </Box>
                <Tag size={"md"} variant="solid" colorScheme="green">
                  {repo.language}
                </Tag>
              </CardBody>

              <CardFooter>
                <Box>{createdAt(repo.created_at)}</Box>
              </CardFooter>
            </Card>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
};

export default RepoCard;
