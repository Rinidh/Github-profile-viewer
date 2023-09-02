import { Avatar, Card, CardBody, Heading } from "@chakra-ui/react";
import { Repo } from "../hooks/useRepos";

interface Props {
  repo: Repo | null;
}

const RepoCard = ({ repo }: Props) => {
  return (
    <Card direction={"row"} variant={"outline"} bg={"yellow.700"}>
      <Avatar
        src={repo?.avatar_url}
        boxSize={"120px"}
        border={"1px solid red"}
        borderRadius={"60px"}
      />
      <CardBody>
        <Heading>{repo?.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default RepoCard;
