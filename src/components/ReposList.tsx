import { StackDivider, VStack } from "@chakra-ui/react";
import { useRepos } from "../hooks/useRepos";
import RepoCard from "./RepoCard";

interface Props {
  searchText: string;
}

const ReposList = ({ searchText }: Props) => {
  const { repos, isLoading } = useRepos(searchText);

  return (
    // {repos.map(
    //   (
    //     repo //be careful; in arrow functions, don't add =>{} parenthesis, rather use =>(...multiple lines) brackets
    //   ) => (
    //     <li key={repo.id}>{repo.name}</li>
    //   )
    // )}

    <VStack spacing={2} divider={<StackDivider borderColor={"green.600"} />}>
      {repos.map((repo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </VStack>
  );
};

export default ReposList;
