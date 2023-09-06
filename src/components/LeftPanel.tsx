import { Stack, useColorMode } from "@chakra-ui/react";
import { User } from "../hooks/useUsers";

interface Props {
  dataSet: Set<User>; //dataSet is of type: a js set holding user-type objects
}

const LeftPanel = ({ dataSet }: Props) => {
  const { colorMode } = useColorMode();

  const leftPanelBackground = colorMode === "light" ? "gray.100" : "gray.800";

  return (
    <>
      <Stack direction="column-reverse" bg={leftPanelBackground}>
        <p>Data-Set size: {dataSet.size}</p>
      </Stack>
    </>
  );
};

export default LeftPanel;
