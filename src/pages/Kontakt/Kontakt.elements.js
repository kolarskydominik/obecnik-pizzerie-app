import styled from "styled-components";
import {
  SectionContainer,
  SectionWrapper,
  SectionHeader,
} from "../../globalStyles";
import img from "../../images/img2m.jpg";

export const SectionHeaderHome = styled(SectionHeader)`
  background-image: url(${img});
  height: 60vh;
  background-attachment: fixed;
  background-position: bottom;
  position: relative;
  z-index: 0;
  font-size: 6rem;

  &:before {
    background: linear-gradient(var(--color-gray90),var(--color-gray30),var(--color-gray30));
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

export const Container = styled(SectionContainer)`
  background-color: var(--color-black);
  margin: 3rem 0;
`;
export const Wrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column-reverse;
  margin: 0;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;