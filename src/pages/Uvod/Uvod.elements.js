import styled from "styled-components";
//elements
import {
  SectionContainer,
  SectionWrapper,
  SectionHeaderHome,
} from "../../globalStyles";

import { dataWebImages } from "../../dataImages";

export const SectionHeaderHome2 = styled(SectionHeaderHome)`
  min-height: 105vh;
  display: flex;
  flex-direction: column;

  img {
    padding-top: 7rem;
    width: 80%;
    max-width: 550px;
    z-index: 2;
  }

  p {
    font-size: 1rem;
    max-width: 700px;
    z-index: 2;
    margin: 2.5rem 20px 1.5rem 20px;
    padding: 5px;
    font-size: 1.4rem;
    text-align: center;
    text-shadow: 0px 0px 6px var(--color-gray90);
  }

  &:before {
    background: linear-gradient(
      var(--color-gray80),
      var(--color-gray30),
      var(--color-gray80)
    );
    background-attachment: fixed;
  }
`;

export const WrapperSection = styled(SectionWrapper)`
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (min-width: 992px) {
    gap: 2rem;
  }
`;

export const WrapperText = styled.div`
  flex: 1 1 320px;
  color: var(--color-gray80);

  h2 {
    font-family: var(--fonts-heading);
    font-size: 3rem;
    padding: 1rem 0;

    @media screen and (min-width: 500px) {
      font-size: 4rem;
    }
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
  }

  @media screen and (min-width: 768px) {
    grid-column: 1/4;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const WrapperImage = styled.div`
  flex: 1 1 320px;
  display: flex;
  justify-content: end;

  img {
    width: 100%;
    margin: auto 0;
  }

  @media screen and (min-width: 768px) {
    grid-column: 4/7;
    justify-content: center;
  }
`;

export const WrapperFlex = styled(SectionWrapper)`
  margin: 4rem 0;
  display: flex;
  place-content: center;
  flex-wrap: wrap;
  gap: 25px;
`;

export const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 280px;
  max-width: 350px;
  flex: 1;
  padding: 25px;
  color: var(--color-gray80);
  text-align: center;

  i {
    font-size: 5rem;
    color: var(--color-primary80);
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    color: var(--color-gray70);
  }
`;

export const ContainerImg = styled(SectionContainer)`
  background-image: url(${dataWebImages.uvodTesimeSe});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem;
  flex-direction: column;
`;

export const Header3 = styled.h2`
  color: var(--color-lightYellow);
  font-family: var(--fonts-heading);
  font-size: 3rem;
  text-align: center;
`;
