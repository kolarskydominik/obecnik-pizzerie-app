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
import { Dialog } from '../../components';

function Rozvoz() {
  return (
    <>
      <Dialog />
      <Navbar />
      <SectionHeaderHome image={dataWebImages.rozvozHeader}>
        <Heading2>Rozvoz Pizzy</Heading2>
        <PhoneLink href={dataText.telefon2}>604 284 804</PhoneLink>
      </SectionHeaderHome>
      <SectionContainer>
        <Wrapper style={{gap: '2rem'}}>
          <Heading2
            style={{
              textShadow: '0px 2px 2px rgba(0, 0, 0, 1)',
              textAlign: 'center',
            }}>
            Vítáme Vás!
          </Heading2>
          <p>
            Jsme nová provozovna, která se specializuje na výrobu pizzy. Děláme
            si vlastní těsto a&nbsp;používáme vybrané italské suroviny. Po
            telefonické objednávce Vám s&nbsp;radostí pizzu připravíme, upečeme
            a&nbsp;dovezeme na Vámi zvolenou adresu nebo si jí lze vyzvednout u
            nás v restauraci.
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
            <p
              style={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                marginBottom: '.75rem',
              }}>
              Příplatek za bezlepkovou pizzu: 100,-
            </p>
            <p
              style={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                marginBottom: '.75rem',
              }}>
              Změna ingredience: 15,-
            </p>
            <p
              style={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                textDecoration: 'underline',
                marginBottom: '.5rem',
              }}>
              <span>Suroviny navíc:</span>
            </p>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '.95rem',
                fontStyle: 'italic',
                marginBottom: '.5rem',
              }}>
              Zelenina: 25,-
              <br />
              <p
                style={{
                  fontSize: '.9rem',
                  fontWeight: 'normal',
                  fontStyle: 'italic',
                }}>
                - olivy, žampiony, ananas, kukuřice, paprika, cibule, rukola,
                špenát, rajčata, feferonky, beraní rohy, tomato rajčatový
                základ, smetana
              </p>
            </p>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '.95rem',
                fontStyle: 'italic',
              }}>
              Italské uzeniny a sýry: 35,- / 100g
              <br />
              <p
                style={{
                  fontSize: '.9rem',
                  fontWeight: 'normal',
                  fontStyle: 'italic',
                  marginBottom: '.5rem',
                }}>
                - salám dolce, šunka, pikantní salám, tuňák, klobása, parmská
                šunka, pancetta, vepřová panenka, kuřecí maso, uzený losos, mozzarella, mascarpone
              </p>
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '.95rem',
                  fontStyle: 'italic',
                  marginBottom: '.5rem',
                }}>
                Italské uzeniny a sýry: 40,- / 100g
                <br />
                <p
                  style={{
                    fontSize: '.9rem',
                    fontWeight: 'normal',
                    fontStyle: 'italic',
                    marginBottom: '.5rem',
                  }}>
                  - pancetta, parmazán, gorgonzela
                </p>
              </p>
            </p>
          </MenuWrap>
          <div style={{ width: '100%' }}>
            <p
              style={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                fontSize: '1.5rem',
                maxWidth: '800px',
                textAlign: 'center',
                margin: '1rem auto',
              }}>
              Naše menu ke stažení v{' '}
              <a href={pdf} download target="_blank" rel="noreferrer">
                PDF
              </a>
              .
            </p>

            <OrderInfo />

            <p
              style={{
                textAlign: 'center',
                fontSize: '1.25rem',
                margin: '1rem 0',
              }}>
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
