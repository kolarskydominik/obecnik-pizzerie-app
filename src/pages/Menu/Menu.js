import React from "react";
// components
import { Navbar, Footer, CopyrightFooter, MenuList } from "../../components";
// elements
import {
  SectionContainer,
  LineDivider,
  SectionHeaderHome,
} from "../../globalStyles";
import { MenuWrap, Wrapper } from "./Menu.elements";
// data
import {
  dataPizzaTomato,
  dataPizzaCream,
  dataPizzaBread,
} from "../../dataMenu";
//images
import { dataWebImages } from "../../dataImages";

function Menu() {
  return (
    <>
      <Navbar />
      <SectionHeaderHome image={dataWebImages.jidelniListekHeader}>
        Menu
      </SectionHeaderHome>
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
          <p>
            <br />
            <br />
            Na zbytku jídelního lístku se pracuje. Děkujeme za trpělivost.
          </p>
        </Wrapper>
      </SectionContainer>
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default Menu;
