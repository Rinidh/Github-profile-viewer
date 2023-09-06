import {
  Flex,
  Avatar,
  Center,
  useColorMode,
  Box,
  Text,
} from "@chakra-ui/react";

interface Props {
  avatarImg: string | null;
  name: string;
}

const LeftPanelBox = ({ avatarImg, name }: Props) => {
  const { colorMode } = useColorMode();

  const leftPanelBackground = colorMode === "light" ? "gray.100" : "gray.700";

  const truncateName = (longName: string) => {
    if (longName.length < 9) return longName;

    let shortenedName = "";
    for (let index = 0; index < 9; index++) {
      //"index < 9" means upto 9 characters will be added to shortenedName
      shortenedName += longName[index];
    }
    shortenedName += "...";
    return shortenedName;
  };

  return (
    <Flex
      direction={"row"}
      bg={leftPanelBackground}
      borderRadius={15}
      sx={{
        //sx prop to add custom styles directly, without creating another css file
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)", // Increase the size by 10% on hover
          boxShadow: "xl",
        },
      }}
    >
      <Avatar
        src={avatarImg ? avatarImg : ""}
        boxSize={"67px"}
        borderRadius={"35px"}
      />
      <Center>
        <Box marginLeft={2}>
          <Text
            fontSize={
              "2xl"
            } /* this emoji is also a character (like a, b, 3, &, % etc) in the UTF-8 char set */
          >
            {truncateName(name)}
          </Text>
        </Box>
      </Center>
    </Flex>
  );
};

export default LeftPanelBox;
