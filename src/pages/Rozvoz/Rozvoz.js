import React from "react";

import { Navbar, Footer, CopyrightFooter, MenuList } from "../../components";

import { SectionHeaderHome } from "./Rozvoz.elements";
import { SectionContainer, LineDivider } from "../../globalStyles";
import { Wrapper, MenuWrap } from "../Menu/Menu.elements";
// data
import {
  dataPizzaTomato,
  dataPizzaCream,
  dataPizzaBread,
} from "../../assets/DataMenu";

function Rozvoz() {
  return (
    <>
      <Navbar />
      <SectionHeaderHome>Rozvoz</SectionHeaderHome>
      <SectionContainer>
        <Wrapper>
          <h3>&mdash; PIZZA &mdash;</h3>
          <MenuWrap>
            <h4>Rajčatový základ</h4>
            <LineDivider />
            <MenuList dataMenu={dataPizzaTomato} />
          </MenuWrap>
          <MenuWrap>
            <h4>Smetanový základ</h4>
            <LineDivider />
            <MenuList dataMenu={dataPizzaCream} />
            <h4>Pizza chléb</h4>
            <LineDivider />
            <MenuList dataMenu={dataPizzaBread} />
          </MenuWrap>
        </Wrapper>
      </SectionContainer>
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default Rozvoz;
