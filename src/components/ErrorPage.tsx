import { Center, Heading, Image, useColorMode } from "@chakra-ui/react";
import Exclamation from "../assets/Exclamation-mark.png";
import ExclamationDark from "../assets/Exclamation-mark-dark.png";

function ErrorPage() {
  const { colorMode } = useColorMode();

  const exclamationSymbol =
    colorMode === "light" ? Exclamation : ExclamationDark;

  return (
    <>
      <Center h={300}>
        <Image
          src={exclamationSymbol}
          boxSize={120}
          opacity={"0.3"}
          marginRight={10}
        />
        <Heading size={"3xl"} opacity={"0.3"}>
          Something Went Wrong...
        </Heading>
      </Center>
    </>
  );
}

export default ErrorPage;
