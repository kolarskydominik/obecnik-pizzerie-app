import React from "react";
// components
import { Navbar, Footer, CopyrightFooter, MenuList } from "../../components";
// elements
import {
  SectionContainer,
  LineDivider,
  SectionHeaderHome,
  Heading2
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
        <Heading2>Menu</Heading2>
      </SectionHeaderHome>
      <SectionContainer>
        <Wrapper>
        <p>
            <br />
            Na jídelního lístku se pracuje. Děkujeme za trpělivost.
            <br />
            <br />
          </p>

          {/* <h3>&mdash; PIZZA &mdash;</h3>
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
          </MenuWrap> */}
        </Wrapper>
      </SectionContainer>
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default Menu;
