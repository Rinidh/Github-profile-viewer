import { Box, useColorMode, Text, Switch } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";

const StyledInlineHeading = styled.p`
  display: inline-block;
  font-size: 25px;
`; //used this coz the <Text> comp of Chakra has unchangeable display: block style, yet inline-block is needed

interface Props {
  changeGithubModeStatus: () => void;
  githubMode: boolean;
}

const AboutModeInfo = ({ changeGithubModeStatus, githubMode }: Props) => {
  const { colorMode } = useColorMode();
  const [githubModeStatus, setGithubModeStatus] = useState(githubMode);

  const onToggle = () => {
    changeGithubModeStatus();
    setGithubModeStatus(!githubModeStatus);
  };

  return (
    <Box
      bg={colorMode === "light" ? "#ffcdde" : "#710d0d"}
      borderRadius={20}
      padding={3}
    >
      {githubModeStatus && (
        <Box>
          <Text fontSize={20} marginBottom={10}>
            You are currently running this app in ACTIVE GITHUB SEARCH MODE. If
            you're offline, you can try the DEMO MODE by de-activating github
            searches
          </Text>
          <Box width={"190px"}>
            <StyledInlineHeading>
              De-activate Github Searches
            </StyledInlineHeading>
          </Box>
        </Box>
      )}
      {!githubModeStatus && (
        <Box>
          <Text fontSize={20} marginBottom={10}>
            You are currently running this app in DEMONSTRATION MODE. Any search
            will return this project's owner's (Rinidh's) github info only
          </Text>
          <Box width={"190px"}>
            <StyledInlineHeading>Activate Github searches</StyledInlineHeading>
          </Box>
        </Box>
      )}

      <Switch
        colorScheme="red"
        size="md"
        float={"right"}
        marginTop={-12} //negative values for positioning
        onChange={onToggle}
        isChecked={githubModeStatus}
      />
    </Box>
  );
};

export default AboutModeInfo;
