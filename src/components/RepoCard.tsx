import { Avatar, Card } from "@chakra-ui/react";
import React from "react";
import { User } from "../hooks/useUsers";

interface Props {
  currentUser: User;
}

const RepoCard = ({ currentUser }: Props) => {
  return (
    <Card direction={"row"} variant={"outline"}>
      <Avatar
        src={currentUser.avatar_url}
        boxSize={20}
        border={"1px solid red"}
      />
    </Card>
  );
};

export default RepoCard;
