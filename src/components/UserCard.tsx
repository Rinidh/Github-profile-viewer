import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import placeholder from "../assets/Placeholder.png";

function UserCard() {
  return (
    <Card borderRadius={15}>
      <HStack>
        <Image src={placeholder} boxSize={"100px"} borderLeftRadius={15} />
        <CardBody>
          <Heading fontSize={"3xl"}>Name</Heading>
          Description
        </CardBody>
      </HStack>
    </Card>
  );
}

export default UserCard;
