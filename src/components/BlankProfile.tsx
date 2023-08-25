import { Center, Heading, Image, useColorMode } from "@chakra-ui/react";
import magnifyingGlass from "../assets/Magnifying-glass.png";
import magnifyingGlassDark from "../assets/Magnifying-glass-dark.png";

function BlankGrid() {
  const { colorMode } = useColorMode();

  const magnifyingGlassColor =
    colorMode === "light" ? magnifyingGlass : magnifyingGlassDark;

  return (
    <>
      <Center h={300}>
        <Image
          src={magnifyingGlassColor}
          boxSize={90}
          opacity={"0.3"}
          marginRight={10}
        />
        <Heading size={"3xl"} opacity={"0.3"}>
          Search Someone
        </Heading>
      </Center>
    </>
  );
}

export default BlankGrid;
