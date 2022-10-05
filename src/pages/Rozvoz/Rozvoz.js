import React from "react";
import { Navbar, Footer, CopyrightFooter } from "../../components";

import styled from "styled-components";
import {
  SectionContainer,
  SectionWrapper,
  SectionHeader,
} from "../../globalStyles";
import img from "../../images/pizza.jpg";

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
`;

export const Container = styled(SectionContainer)``;
export const Wrapper = styled(SectionWrapper)``;

function Rozvoz() {
  return (
    <>
      <Navbar />
      <SectionHeaderHome>Rozvoz</SectionHeaderHome>
      <Container>
        <Wrapper>

        </Wrapper>
      </Container>
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default Rozvoz;
