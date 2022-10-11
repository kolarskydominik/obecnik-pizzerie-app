import React from "react";
// components
import { Navbar, Footer, CopyrightFooter, Dialog } from "../../components";
// icons
import { GiFullPizza, GiCoffeeBeans, GiForkKnifeSpoon } from "react-icons/gi";
// images
import { dataWebImages } from "../../dataImages";
//elements
import {
  SectionHeaderHome2,
  WrapperSection,
  WrapperImage,
  WrapperText,
  WrapperFlex,
  FlexItem,
  ContainerImg,
  Header3,
} from "./Uvod.elements";
import { LinkBtn, SectionContainer } from "../../globalStyles";

function Restaurace() {
  return (
    <>
      <Dialog />
      <Navbar />
      <SectionHeaderHome2 image={dataWebImages.uvodHeader}>
        <img src={dataWebImages.logoHeader} alt="Obecník Raškovice logo" />
        <p>
          V podhůří Lysé Hory Vám přinášíme pravou italskou pizzu, společně s
          tradiční domácí a zahraniční kuchyní.
        </p>
        <LinkBtn to="/menu">Kouknout na menu</LinkBtn>
      </SectionHeaderHome2>

      <SectionContainer>
        <WrapperSection>
          <WrapperText>
            <h2>Vítáme Vás</h2>
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
          </WrapperText>
          <WrapperImage>
            <img src={dataWebImages.uvodWelcome} alt="majitele"></img>
          </WrapperImage>
        </WrapperSection>
      </SectionContainer>

      <SectionContainer style={{ background: "var(--color-white)" }}>
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
      </SectionContainer>

      <SectionContainer>
        <WrapperSection>
          <WrapperImage>
            <img src={dataWebImages.galerieHeader} alt="galerie"></img>
          </WrapperImage>
          <WrapperText>
            <p style={{ paddingBottom: "24px" }}>
              <h2>Galerie</h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              numquam, omnis repudiandae nisi nulla commodi minima ullam
              molestias.
            </p>
            <LinkBtn to="/galerie" style={{ margin: "0 auto 0 0" }}>
              Více
            </LinkBtn>
          </WrapperText>
        </WrapperSection>
      </SectionContainer>
      
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
