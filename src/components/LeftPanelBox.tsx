import {
  Flex,
  Avatar,
  Center,
  useColorMode,
  Box,
  Text,
} from "@chakra-ui/react";
import TruncateWord from "./TruncateWord";

interface Props {
  avatarImg: string | null;
  name: string;
  isActive: boolean;
  onBoxClick: () => void;
}

const LeftPanelBox = ({ avatarImg, name, isActive, onBoxClick }: Props) => {
  const { colorMode } = useColorMode();

  const leftPanelBackground = colorMode === "light" ? "gray.100" : "gray.400";

  const border = isActive
    ? colorMode === "light"
      ? "4px solid #2bc170"
      : "4px solid #2bc170" //16be51
    : "";

  return (
    <Flex
      direction={"row"}
      padding={2}
      minWidth={240}
      bg={leftPanelBackground}
      border={border}
      borderRadius={15}
      marginBottom={2}
      sx={{
        //sx prop to add custom styles directly, without creating another css file
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.04)", // Increase the size by 10% on hover
          boxShadow: "xl",
        },
      }}
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        //event param not needed
        //console.log(event); //SyntheticBaseEvent by React. Note the type of event this is: React.MouseEvent<HTMLDivElement>
        onBoxClick();
      }}
    >
      <Avatar
        src={
          avatarImg
            ? avatarImg
            : "" /* empty string makes chakra render a default avatar img */
        }
        boxSize={"65px"}
      />
      <Center>
        <Box marginLeft={2}>
          <Text
            fontSize={
              "2xl"
            } /* this emoji is also a character (like a, b, 3, &, % etc) in the UTF-8 char set */
          >
            {<TruncateWord longWord={name} />}
          </Text>
        </Box>
      </Center>
    </Flex>
  );
};

export default LeftPanelBox;
