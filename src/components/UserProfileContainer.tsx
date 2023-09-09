import { User } from "../hooks/useUsers";
import ErrorPage from "./ErrorPage";
import { InfoTabs } from "./InfoTabs";
import NoNetwork from "./NoNetwork";
import NoUserFound from "./NoUserFound";

interface Props {
  user: User;
  isLoading: boolean;
  searchText: string;
  error: string;
}

const UserProfileContainer = ({
  user,
  isLoading,
  searchText,
  error,
}: Props) => {
  if (error) {
    switch (error) {
      case "Failed to fetch":
        return <NoNetwork />;

      case "Not Found":
        return <NoUserFound />;

      default:
        return <ErrorPage />;
    }
  }

  return <InfoTabs user={user} isLoading={isLoading} searchText={searchText} />;
};

export default UserProfileContainer;
