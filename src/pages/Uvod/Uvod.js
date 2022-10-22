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

//dataText
import { dataText } from "../../dataText";

function Restaurace() {
  return (
    <>
      {/* <Dialog /> */}
      <Navbar />
      <SectionHeaderHome2 image={dataWebImages.uvodHeader}>
        <img
          src={dataWebImages.logoHeader}
          alt="Obecník Raškovice logo"
          title="Obecník - restaurace a pizzerie Raškovice"
        />
        {/* <p>{dataText.uvod_header}</p>
         */}
        <p>
          V beskydské přírodě v klidné části vesnice Raškovice brzy otevřeme
          restauraci - pizzeii Obecník. Budova právě prochází rekonstrukcí,
          která se blíží do finále. Pilně se pracuje na vytvoření útulného
          prostředí, kde si budete moci pochutnat na české a ukrajinské kuchyni.
        </p>
        <p>
        Specializujeme se také na výrobu italské pizzy a už nyní můžete využít
          náš rozvoz a dát si pizzu z pohodlí domova nebo v práci. V nabídce
          budou i výhodné obědové menu. Budeme péct převážně vlastní dezerty a
          necháme si záležet i na dobré kávě pražírny - Laura Coffee, která má svou pražírnu
          v Ostravě. 
        </p>
        <p>Věříme, že si restauraci - pizzerii Obecník oblíbíte a
          strávíte tam příjemné chvíle. O otevření Vás budeme včas informovat
          zde na webových stránkách.</p>
        <LinkBtn to="/rozvoz">Kouknout na rozvoz</LinkBtn>
      </SectionHeaderHome2>

      {/* <SectionContainer>
        <WrapperSection>
          <WrapperText>
            <h2>Vítáme Vás</h2>
            <p>{dataText.uvod_vitejte1}</p>
            <p>{dataText.uvod_vitejte2}</p>
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
            <p>{dataText.uvod_pizzaText}</p>
          </FlexItem>
          <FlexItem>
            <i>
              <GiForkKnifeSpoon />
            </i>
            <h3>Mezinárodní speciality</h3>
            <p>{dataText.uvod_mezinarodniText}</p>
          </FlexItem>
          <FlexItem>
            <i>
              <GiCoffeeBeans />
            </i>
            <h3>Caffè</h3>
            <p>{dataText.uvod_cafeText}</p>
          </FlexItem>
        </WrapperFlex>
      </SectionContainer>

      <SectionContainer>
        <WrapperSection>
          <WrapperImage>
            <img src={dataWebImages.galerieHeader} alt="galerie"></img>
          </WrapperImage>
          <WrapperText>
            <h2>Galerie</h2>
            <p style={{ paddingBottom: "24px" }}>{dataText.uvod_galerieText}</p>
            <LinkBtn to="/galerie" style={{ margin: "0 auto 0 0" }}>
              Více
            </LinkBtn>
          </WrapperText>
        </WrapperSection>
      </SectionContainer>

      <ContainerImg>
        <Header3>Těšíme se na Vás</Header3>
        <LinkBtn to="/kontakt">Rezervovat stůl</LinkBtn>
      </ContainerImg> */}
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default Restaurace;
