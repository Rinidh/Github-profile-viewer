import { Stack, useColorMode } from "@chakra-ui/react";

const LeftPanel = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Stack direction="column-reverse">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </Stack>
    </>
  );
};

export default LeftPanel;
