import { Center, Heading, Image, useColorMode } from "@chakra-ui/react";
import SadSmiley from "../assets/No-user-found.png";
import SadSmileyDark from "../assets/No-user-found-dark.png";

function NoUserFound() {
  const { colorMode } = useColorMode();

  const smiley = colorMode === "light" ? SadSmiley : SadSmileyDark;

  return (
    <>
      <Center h={300}>
        <Image src={smiley} boxSize={120} opacity={"0.3"} marginRight={10} />
        <Heading size={"3xl"} opacity={"0.3"}>
          No such user...
        </Heading>
      </Center>
    </>
  );
}

export default NoUserFound;
