import styled from "styled-components";
import { SectionHeader, SectionWrapper } from "../../globalStyles";

import img from "../../images/menu.jpg";

export const SectionHeaderHome = styled(SectionHeader)`
  background-image: url(${img});
  background-position: top;
  background-attachment: fixed;

  height: 60vh;
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
`;

export const Wrapper = styled(SectionWrapper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 60px;

    h3 {
    font-size: 3rem;
    text-align: center;
    font-family: var(--fonts-heading);
    color: var(--color-primary);

    padding: 1rem;
    width: 100%;
  }
`;

export const MenuWrap = styled.div`
  color: var(--color-gray90);
  min-width: 280px;
  max-width: 500px;
  flex: 1;
  

  h4 {
    font-size: 22px;
    color: var(--color-gray70);
    /* color: var(--color-primary80); */
    font-family: var(--fonts-heading);
    padding: 1rem 0 0 0;
  }
`;
