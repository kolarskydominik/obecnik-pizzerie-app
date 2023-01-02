import React from "react";
//icons
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
  HiOutlineClock,
} from "react-icons/hi";
//elements
import {
  FooterContainer,
  FooterWrap,
  FooterItems,
  FooterHeader,
  FooterItem,
  FooterLink,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";
//textData
import {dataText} from "../../dataText";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        {/* address */}
        <FooterItems>
          <FooterHeader>KDE NÁS NAJDETE</FooterHeader>
          <FooterItem>Restaurace a Pizzerie Obecník</FooterItem>
          <FooterItem>Raškovice 50, 739 04</FooterItem>
          <FooterItem>
            <FooterLink href="https://goo.gl/maps/ofZQbcaPbob6QgAD7" target="_blank">
              <HiLocationMarker /> zobrazit na mapě
            </FooterLink>
          </FooterItem>
        </FooterItems>
        {/* kontakty */}
        <FooterItems>
          <FooterHeader>KONTAKTY</FooterHeader>
          <FooterItem>
            <HiPhone /> telefon:<span> {dataText.telefon}</span>
          </FooterItem>
          <FooterItem>
            <HiMail /> email:<span> {dataText.email}</span>
          </FooterItem>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/profile.php?id=100087086114612"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookSquare />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com/obecnik_restaurace_pizzerie_/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </FooterItems>
        {/* otviracka */}
        <FooterItems>
          <FooterHeader>OTEVÍRACÍ DOBA</FooterHeader>
          <FooterItem>
            <HiOutlineClock /> po-so:<span> {dataText.otevrenoPoCt}</span>
          </FooterItem>
          {/* <FooterItem>
            <HiOutlineClock /> pá-so:<span> {dataText.otevrenoPaSo}</span>
          </FooterItem> */}
          <FooterItem>
          <HiOutlineClock /> ne:<span> {dataText.otevrenoNe} &nbsp;</span>
          </FooterItem>
        </FooterItems>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
