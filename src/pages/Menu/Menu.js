import React from "react";

import { Navbar, Footer, CopyrightFooter } from "../../components";

import styled from "styled-components";
import {
  SectionContainer,
  SectionWrapper,
  SectionHeader,
} from "../../globalStyles";
import img from "../../images/menu.jpg";

import pizza_menu from "../../pizza-menu.pdf";

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

export const Container = styled(SectionContainer)``;
export const Wrapper = styled(SectionWrapper)``;

function Menu() {
  return (
    <>
    <Navbar/>
      <SectionHeaderHome>Menu</SectionHeaderHome>
      <Container>
        <Wrapper>
          <object
            data={pizza_menu}
            type="application/pdf"
            width="100%"
            height="1000"
          >
            <p>
              Alternative text - include a link{" "}
              <a href="http://africau.edu/images/default/sample.pdf">
                to the PDF!
              </a>
            </p>
          </object>
        </Wrapper>
      </Container>
      <Footer/>
      <CopyrightFooter/>
    </>
  );
}

export default Menu;
