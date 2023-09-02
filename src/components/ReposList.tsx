import { Card, StackDivider, VStack } from "@chakra-ui/react";
import { useRepos } from "../hooks/useRepos";
import RepoCard from "./RepoCard";
import { User } from "../hooks/useUsers";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

interface Props {
  searchText: string;
}

const ReposList = ({ searchText }: Props) => {
  const { repos, isLoading } = useRepos(searchText);

  const currentUser = useContext(UserContext);

  repos.forEach((repo) => console.log(repo.name));

  return (
    // {repos.map(
    //   (
    //     repo //be careful; in arrow functions, don't add {} parenthesis, rather use ()
    //   ) => (
    //     <li key={repo.id}>{repo.name}</li>
    //   )
    // )}

    <VStack spacing={2} divider={<StackDivider borderColor={"green.600"} />}>
      <RepoCard currentUser={currentUser} />
    </VStack>
  );
};

export default ReposList;
