import { useColorMode } from "@chakra-ui/react";
import styled from "styled-components";

interface HrProps {
  color: string;
}

const StyledHr = styled.hr<HrProps>`
  border: 1px solid ${(propps) => propps.color};
`;

function Divider() {
  const { colorMode } = useColorMode();

  return <StyledHr color={colorMode === "dark" ? "gray" : "black"} />;
}

export { Divider };
