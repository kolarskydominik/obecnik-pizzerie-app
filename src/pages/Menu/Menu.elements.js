import styled from "styled-components";
import {
  SectionHeader,
} from "../../globalStyles";

import img from "../../images/menu.jpg";

export const SectionHeaderHome = styled(SectionHeader)`
  background-image: url(${img});
  background-position: top;
  background-attachment: fixed;

  height: 60vh;
  position: relative;
  z-index: 0;

  &:before {
    background: linear-gradient(var(--color-gray80),var(--color-gray30),var(--color-gray30));
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  ${SectionHeader}
`;