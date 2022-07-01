import styled from "styled-components";
import { flexbox, space, FlexboxProps, SpaceProps } from "styled-system";

interface IFlex extends FlexboxProps, SpaceProps {}

export const Flex = styled.div<IFlex>(flexbox, space, {
  display: "flex",
});
