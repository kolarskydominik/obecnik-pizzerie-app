import React from 'react';
//components
import {
  Navbar,
  Footer,
  CopyrightFooter,
  MenuList,
  OrderInfo,
} from '../../components';
//elements
import {
  SectionHeaderHome,
  SectionContainer,
  LineDivider,
  Heading2,
  PhoneLink,
} from '../../globalStyles';
import { Wrapper, MenuWrap } from '../Menu/Menu.elements';
// data
import {
  dataPizzaTomato,
  dataPizzaCream,
  dataPizzaBread,
} from '../../dataMenu';
// images
import { dataWebImages } from '../../dataImages';
// dataText
import { dataText } from '../../dataText';
//import pdf
import pdf from '../../files/OBECNIK-PIZZA-ROZVOZ.pdf';

function Rozvoz() {
  return (
    <>
      <Navbar />
      <SectionHeaderHome image={dataWebImages.rozvozHeader}>
        <Heading2>Rozvoz Pizzy</Heading2>
        <p>od pondělí 31.10.2022</p>
        <PhoneLink href={dataText.telefon2}>604 284 804</PhoneLink>
      </SectionHeaderHome>
      <SectionContainer>
        <Wrapper>
          <Heading2 style={{ textShadow: '0px 2px 2px rgba(0, 0, 0, 1)', textAlign: 'center' }}>
            Vítáme Vás!
          </Heading2>
          <p>
            Jsme nová provozovna, která se specializuje na výrobu pizzy. Děláme
            si vlastní těsto a&nbsp;používáme vybrané italské suroviny. Po
            telefonické objednávce Vám s&nbsp;radostí pizzu připravíme, upečeme
            a&nbsp;dovezeme na Vámi zvolenou adresu. Průměrná doba dovozu je od
            20 do 60 min.
            <br></br>
            <br></br>
            <br></br>
          </p>

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
            <p>
              <br />
            </p>
            <LineDivider />
            <MenuList dataMenu={dataPizzaBread} />
            <br />
            <p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
              příplatek za bezlepkovou pizzu +100,-
            </p>
          </MenuWrap>
          <div style={{width: '100%'}}>
          <p
            style={{
              fontWeight: 'bold',
              fontStyle: 'italic',
              fontSize: '1.5rem',
              maxWidth: '800px',
              textAlign: 'center',
              margin: '1rem auto'
            }}>
            Naše menu ke stažení v{' '}
            <a href={pdf} download target="_blank" rel="noreferrer">
              PDF
            </a>
            .
          </p>

          <OrderInfo />


          <p style={{ textAlign: 'center', fontSize: '1.25rem',margin: '1rem 0'}}>

            Sledujte nás také na{' '}
            <a
            
              href="https://www.facebook.com/profile.php?id=100087086114612"
              target="_blank"
              rel="noreferrer">
              Facebooku
            </a>{' '}
            ať vám nic neunikne.
          </p>
          </div>
        </Wrapper>
      </SectionContainer>
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default Rozvoz;
