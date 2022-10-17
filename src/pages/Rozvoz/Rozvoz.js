import React from "react";
//components
import {
  Navbar,
  Footer,
  CopyrightFooter,
  MenuList,
  OrderInfo,
} from "../../components";
//elements
import { SectionHeaderHome, SectionContainer, LineDivider } from "../../globalStyles";
import { Wrapper, MenuWrap } from "../Menu/Menu.elements";
// data
import {
  dataPizzaTomato,
  dataPizzaCream,
  dataPizzaBread
} from "../../dataMenu";
// images
import {dataWebImages} from "../../dataImages";

function Rozvoz() {
  return (
    <>
      <Navbar />
      <SectionHeaderHome image={dataWebImages.rozvozHeader}>Rozvoz</SectionHeaderHome>
      <SectionContainer>
        <Wrapper>
          {/* <p>
            Pizzu si můžete objednat a vyzvednout osobně, nebo využít náš
            rozvoz.
          </p>
          <p>
            Rádi Vám naši pizzu přivezeme kamkoliv v Raškovicích, Janovicích,
            Krásné, Pražmě, Morávce, Vyšních i Nižních Lhotách.
          </p> */}
          <OrderInfo />
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
            {/* <h4>Pizza chléb</h4> */}
            <p><br/></p>
            <LineDivider />
            <MenuList dataMenu={dataPizzaBread} />
            <br/>
            <p style={{fontWeight:'bold', fontStyle: 'italic'}}>příplatek za bezlepkovou pizzu            +100,-
</p>
          </MenuWrap>
        </Wrapper>
      </SectionContainer>
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default Rozvoz;
