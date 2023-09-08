import { User } from "../hooks/useUsers";
import { InfoTabs } from "./InfoTabs";
import NoNetwork from "./NoNetwork";

interface Props {
  user: User;
  isLoading: boolean;
  searchText: string;
  error: Error | undefined;
}

const UserProfileContainer = ({
  user,
  isLoading,
  searchText,
  error,
}: Props) => {
  if (error?.message.includes("Failed to fetch")) {
    return <NoNetwork />;
  }

  return <InfoTabs user={user} isLoading={isLoading} searchText={searchText} />;
};

export default UserProfileContainer;