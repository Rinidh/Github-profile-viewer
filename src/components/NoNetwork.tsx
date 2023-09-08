import { Center, Heading, Image, useColorMode } from "@chakra-ui/react";
import networkSymbolLight from "../assets/No-connect.png";
import networkSymbolDark from "../assets/No-connect-dark.png";

function NoNetwork() {
  const { colorMode } = useColorMode();

  const networkSymbol =
    colorMode === "light" ? networkSymbolLight : networkSymbolDark;

  return (
    <>
      <Center h={300}>
        <Image
          src={networkSymbol}
          boxSize={90}
          opacity={"0.3"}
          marginRight={10}
        />
        <Heading size={"3xl"} opacity={"0.3"}>
          Oops! Check your network
        </Heading>
      </Center>
    </>
  );
}

export default NoNetwork;
