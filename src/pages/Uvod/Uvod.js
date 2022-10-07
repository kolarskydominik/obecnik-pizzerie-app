import React from "react";

import { Navbar, Footer, CopyrightFooter, Dialog } from "../../components";

import imgWelcome from "../../images/welcome.jpg";
import imgGalerie from "../../images/galerie.jpg";

import { GiFullPizza, GiCoffeeBeans, GiForkKnifeSpoon } from "react-icons/gi";

import {
  SectionHeaderHome,
  Container,
  WrapperGrid,
  WrapperFlex,
  Header2,
  WrapperRight,
  WrapperLeft,
  ContainerFlex,
  FlexItem,
  ContainerImg,
  WrapperLeft2,
  WrapperRight2,
  Header3,
  LinkBtn,
} from "./Uvod.elements";

import logo from '../../assets/images/web/obecnik-logo.png';

function Restaurace() {
  return (
    <>
      <Dialog/>
      <Navbar />
      <SectionHeaderHome>
        <img src={logo} alt="Obecník Raškovice logo" />
        <p>
          V podhůří Lysé Hory Vám přinášíme pravou italskou pizzu, společně s tradiční domácí a
          zahraniční kuchyní.
        </p>
        <LinkBtn to="/menu">Kouknout na menu</LinkBtn>
      </SectionHeaderHome>
      <Container>
        <WrapperGrid>
          <WrapperLeft>
            <Header2>Vítáme Vás</Header2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              numquam, omnis repudiandae nisi nulla commodi minima ullam
              molestias.
            </p>
            <p>
              Aperiam numquam, omnis repudiandae nisi nulla commodi minima ullam
              molestias earum doloribus perferendis incidunt quae laborum minus
              odio vitae sit cumque.
            </p>
          </WrapperLeft>
          <WrapperRight>
            <img src={imgWelcome} alt="majitele"></img>
          </WrapperRight>
        </WrapperGrid>
      </Container>
      <ContainerFlex>
        <WrapperFlex>
          <FlexItem>
            <i>
              <GiFullPizza />
            </i>
            <h3>Pizza</h3>
            <p>
              Aliquam erat volutpat. Nullam dapibus fermentum ipsum. Fusce
              tellus odio, dapibus id fermentum quis, suscipit id erat. Morbi
              scelerisque luctus velit. In convallis. Phasellus enim erat, ...
            </p>
          </FlexItem>
          <FlexItem>
            <i>
              <GiForkKnifeSpoon />
            </i>
            <h3>Italské speciality</h3>
            <p>
              Aliquam erat volutpat. Nullam dapibus fermentum ipsum. Fusce
              tellus odio, dapibus id fermentum quis, suscipit id erat. Morbi
              scelerisque luctus velit. In convallis. Phasellus enim erat, ...
            </p>
          </FlexItem>
          <FlexItem>
            <i>
              <GiCoffeeBeans />
            </i>
            <h3>Caffè</h3>
            <p>
              Aliquam erat volutpat. Nullam dapibus fermentum ipsum. Fusce
              tellus odio, dapibus id fermentum quis, suscipit id erat. Morbi
              scelerisque luctus velit. In convallis. Phasellus enim erat, ...
            </p>
          </FlexItem>
        </WrapperFlex>
      </ContainerFlex>
      <Container>
        <WrapperGrid>
          <WrapperLeft2>
            <img src={imgGalerie} alt="majitele"></img>
          </WrapperLeft2>
          <WrapperRight2>
            <Header2>Galerie</Header2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              numquam, omnis repudiandae nisi nulla commodi minima ullam
              molestias.
            </p>
            <LinkBtn to="/galerie" className="CTAgalerie">
              Více
            </LinkBtn>
          </WrapperRight2>
        </WrapperGrid>
      </Container>
      <ContainerImg>
        <Header3>Těšíme se na Vás</Header3>
        <LinkBtn to="/kontakt">Rezervovat stůl</LinkBtn>
      </ContainerImg>
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default Restaurace;
