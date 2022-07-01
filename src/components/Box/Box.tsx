import styled from "styled-components";

import {
  space,
  color,
  layout,
  ColorProps,
  SpaceProps,
  LayoutProps,
  flexbox,
  FlexboxProps,
} from "styled-system";

interface IBox extends ColorProps, SpaceProps, LayoutProps, FlexboxProps {}

export const Box = styled.div<IBox>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox
);
