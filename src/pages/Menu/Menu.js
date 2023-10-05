import React from 'react';
// components
import { Navbar, Footer, CopyrightFooter, MenuList } from '../../components';
// elements
import {
  SectionContainer,
  LineDivider,
  SectionHeaderHome,
  Heading2,
} from '../../globalStyles';
import { MenuWrap, Wrapper } from './Menu.elements';
// data
// import {
//   dataPizzaTomato,
//   dataPizzaCream,
//   dataPizzaBread,
// } from "../../dataMenu";
//images
import { dataWebImages } from '../../dataImages';
import pdf from '../../files/alergeny.pdf';

function Menu() {
  return (
    <>
      <Navbar />
      <SectionHeaderHome image={dataWebImages.jidelniListekHeader}>
        <Heading2>Menu</Heading2>
      </SectionHeaderHome>
      <SectionContainer>
        <Wrapper>
          {/* <div
            style={{
              width: '100%',
              maxWidth: '550px',
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem',
            }}>
            <a
              href={dataWebImages.specMenu}
              target="_self"
              rel="noopener noreferrer">
              <img
                id="image"
                style={{ width: '100%' }}
                src={dataWebImages.specMenu}
                alt="Speciální menu"
                title="Speciální menu"
              />
            </a>
          </div> */}
          <div
            style={{
              width: '100%',
              maxWidth: '550px',
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem',
            }}>
            <a
              href={dataWebImages.poledniMenu}
              target="_self"
              rel="noopener noreferrer">
              <img
                id="image"
                style={{ width: '100%' }}
                src={dataWebImages.poledniMenu}
                alt="Polední menu"
                title="Polední menu"
              />
            </a>
          </div>

          <div
            style={{
              width: '100%',
              maxWidth: '550px',
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem',
            }}>
            <a
              href={dataWebImages.jidelni1}
              target="_self"
              rel="noopener noreferrer">
              <img
                id="image"
                style={{ width: '100%' }}
                src={dataWebImages.jidelni1}
                alt="Jídelní lístek"
                title="Jídelní lístek"
              />
            </a>
          </div>
          <div
            style={{
              width: '100%',
              maxWidth: '550px',
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem',
            }}>
            <a
              href={dataWebImages.jidelni2}
              target="_self"
              rel="noopener noreferrer">
              <img
                id="image"
                style={{ width: '100%' }}
                src={dataWebImages.jidelni2}
                alt="Jídelní lístek"
                title="Jídelní lístek"
              />
            </a>
          </div>
          <div
            style={{
              width: '100%',
              maxWidth: '550px',
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem',
            }}>
            <a
              href={dataWebImages.jidelni3}
              target="_self"
              rel="noopener noreferrer">
              <img
                id="image"
                style={{ width: '100%' }}
                src={dataWebImages.jidelni3}
                alt="Jídelní lístek"
                title="Jídelní lístek"
              />
            </a>
          </div>
          <div
            style={{
              width: '100%',
              maxWidth: '550px',
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem',
            }}>
            <a
              href={dataWebImages.napoj1}
              target="_self"
              rel="noopener noreferrer">
              <img
                id="image"
                style={{ width: '100%' }}
                src={dataWebImages.napoj1}
                alt="Nápojový lístek"
                title="Nápojový lístek"
              />
            </a>
          </div>
          <div
            style={{
              width: '100%',
              maxWidth: '550px',
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem',
            }}>
            <a
              href={dataWebImages.napoj2}
              target="_self"
              rel="noopener noreferrer">
              <img
                id="image"
                style={{ width: '100%' }}
                src={dataWebImages.napoj2}
                alt="Nápojový lístek"
                title="Nápojový lístek"
              />
            </a>
          </div>
          <p
            style={{
              width: '600px',
              color: 'black',
              textDecorationLine: 'none',
              fontSize: '1rem',
            }}>
            Odkaz na alergeny{' '}
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'blue',
                textDecorationLine: 'none',
                fontSize: '1rem',
              }}>
              zde
            </a>
            .
            <br />
            Aktualizováno 20.2.2023
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
