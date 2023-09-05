import { Stack, useColorMode } from "@chakra-ui/react";

const LeftPanel = () => {
  const { colorMode } = useColorMode();

  const leftPanelBackground = colorMode === "light" ? "gray.100" : "gray.800";

  return (
    <>
      <Stack direction="column-reverse" bg={leftPanelBackground}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </Stack>
    </>
  );
};

export default LeftPanel;
