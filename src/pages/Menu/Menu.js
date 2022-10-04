import React from "react";

import { Navbar, Footer, CopyrightFooter } from "../../components";

import { SectionContainer, SectionWrapper } from "../../globalStyles";
import {SectionHeaderHome} from './Menu.elements';

function Menu() {
  return (
    <>
      <Navbar />
      <SectionHeaderHome>Menu</SectionHeaderHome>
      <SectionContainer>
        <SectionWrapper>
          
        </SectionWrapper>
      </SectionContainer>
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default Menu;
