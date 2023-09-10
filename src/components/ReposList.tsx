import { StackDivider, VStack } from "@chakra-ui/react";
import { useRepos } from "../hooks/useRepos";
import RepoCard from "./RepoCard";
import NoRepos from "./NoRepos";

interface Props {
  searchText: string;
}

const ReposList = ({ searchText }: Props) => {
  const { repos } = useRepos(searchText);

  const randomNumber = () => {
    return Math.random() * 100;
  };

  return (
    <VStack spacing={2} divider={<StackDivider borderColor={"green.600"} />}>
      {repos.length ? (
        repos.map((repo) => (
          <RepoCard repo={repo} key={randomNumber()}></RepoCard>
        ))
      ) : (
        <NoRepos />
      )}
    </VStack>
  );
};

export default ReposList;
