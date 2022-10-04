import styled from "styled-components";

import { SectionHeader } from "../../globalStyles";

import img from "../../images/galerie.jpg";

export const SectionHeaderHome = styled(SectionHeader)`
  background-image: url(${img});
  height: 60vh;
  background-attachment: fixed;
  position: relative;
  z-index: 0;

  &:before {
    background: linear-gradient(
      var(--color-gray80),
      var(--color-gray30),
      var(--color-gray30)
    );
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
