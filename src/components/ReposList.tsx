import { StackDivider, VStack } from "@chakra-ui/react";
import { useRepos } from "../hooks/useRepos";
import RepoCard from "./RepoCard";

interface Props {
  searchText: string;
}

const ReposList = ({ searchText }: Props) => {
  const { repos, isLoading } = useRepos(searchText);

  const randomNumber = () => {
    return Math.random() * 100;
  };
  console.log(randomNumber());

  return (
    // {repos.map(
    //   (
    //     repo //be careful; in arrow functions, don't add =>{} parenthesis, rather use =>(...multiple lines) brackets
    //   ) => (
    //     <li key={repo.id}>{repo.name}</li>
    //   )
    // )}

    <VStack
      spacing={2}
      divider={<StackDivider borderColor={"green.600"} />}
      key={1}
    >
      {repos.map((repo) => (
        <RepoCard repo={repo} key={randomNumber()}></RepoCard>
      ))}
    </VStack>
  );
};

export default ReposList;
