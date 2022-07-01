import styled from "styled-components";
import { Flex } from "../../components/Flex/Flex";
import { Box } from "../../components/Box/Box";

const StyledFooter = styled(Box)`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  text-align: center;
  height: 5vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const FooterText = styled.p`
  padding: 0;
  margin-bottom: 0;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Flex justifyContent="center" alignContent="center">
        <FooterText>Created by Kacper Figa 2022</FooterText>
      </Flex>
    </StyledFooter>
  );
};
