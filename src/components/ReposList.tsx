import { useRepos } from "../hooks/useRepos";

interface Props {
  searchedUser: string;
}

const ReposList = ({ searchedUser }: Props) => {
  const { repos, isLoading } = useRepos(searchedUser);

  repos.forEach((repo) => console.log(repo.name));

  return (
    <ul>
      {repos.map(
        (
          repo //be careful; in arrow functions, don't add {} parenthesis, rather use ()
        ) => (
          <li key={repo.id}>{repo.name}</li>
        )
      )}
    </ul>
  );
};

export default ReposList;
