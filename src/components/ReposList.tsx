import { StackDivider, VStack } from "@chakra-ui/react";
import { useRepos } from "../hooks/useRepos";
import RepoCard from "./RepoCard";
import NoRepos from "./NoRepos";

interface Props {
  searchText: string;
}

const ReposList = ({ searchText }: Props) => {
  const { repos } = useRepos(searchText);

  return (
    <VStack spacing={2} divider={<StackDivider borderColor={"green.600"} />}>
      {repos.length ? (
        repos.map((repo) => <RepoCard repo={repo} key={repo.id}></RepoCard>)
      ) : (
        <NoRepos />
      )}
    </VStack>
  );
};

export default ReposList;
