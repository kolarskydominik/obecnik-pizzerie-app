import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  SectionContainer,
  SectionWrapper,
  SectionHeader,
} from "../../globalStyles";

import img from "../../images/img6m1.jpg";
import imgCTA from "../../images/CTAgalerie.jpg";

export const SectionHeaderHome = styled(SectionHeader)`
  background-image: url(${img});
  min-height: 105vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background-attachment: fixed;

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
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    background-attachment: fixed;
  }
  ${SectionHeader}
`;
export const Container = styled(SectionContainer)``;

export const WrapperGrid = styled(SectionWrapper)`
  margin: 3rem 0;
  padding: 0 25px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const WrapperLeft = styled.div`
  grid-column: span 6;
  color: var(--color-gray80);
  p {
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    grid-column: 1/4;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Header2 = styled.h2`
  margin-top: 1rem;
  font-family: var(--fonts-heading);
  font-size: 4rem;
  padding: 0rem 0 1rem;
`;

export const WrapperRight = styled.div`
  grid-column: 1/7;
  display: flex;
  justify-content: end;

  img {
    padding: 10px;
    width: 100%;
    margin: auto 0;
    aspect-ratio: 1920/1280;

    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 992px) {
      width: 80%;
    }
  }

  @media screen and (min-width: 768px) {
    grid-column: 4/7;
    justify-content: center;
  }
`;
export const ContainerFlex = styled(SectionContainer)`
  background: var(--color-white);
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
    font-size: 0.9rem;
    color: var(--color-gray70);
  }
`;

export const ContainerImg = styled(SectionContainer)`
  background-image: url(${imgCTA});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem;
  flex-direction: column;
`;

export const WrapperLeft2 = styled.div`
  grid-column: 1/7;

  display: flex;
  justify-content: start;
  img {
    padding: 0 30px;
    margin: auto 0;
    width: 100%;
    aspect-ratio: 1920/1280;
  }

  @media screen and (min-width: 768px) {
    grid-column: 1/4;
    justify-content: center;
  }
`;
export const WrapperRight2 = styled.div`
  grid-column: span 6;
  color: var(--color-gray80);
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    grid-column: 4/7;
  }
`;

export const Header3 = styled.h2`
  color: var(--color-lightYellow);
  font-family: var(--fonts-heading);
  font-size: 3rem;
  text-align: center;
`;

export const LinkBtn = styled(Link)`
  z-index: 2;
  text-decoration: none;
  white-space: nowrap;
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  margin: 2rem auto 1.5rem;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  cursor: pointer;

  &:hover {
    color: var(--color-lightYellow);
    background: var(--color-primary);
    font-weight: 500;
  }

  &.CTAgalerie {
    margin: 1.5rem auto 0 0;
  }
`;
