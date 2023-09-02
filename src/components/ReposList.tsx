import { Card, StackDivider, VStack } from "@chakra-ui/react";
import { Repo, useRepos } from "../hooks/useRepos";
import RepoCard from "./RepoCard";
import { User } from "../hooks/useUsers";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

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
      <RepoCard repo={repos[0]} />
      <RepoCard repo={repos[1]} />
    </VStack>
  );
};

export default ReposList;
