import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import {HiLocationMarker, HiPhone, HiMail, HiOutlineClock} from "react-icons/hi";
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

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        {/* address */}
        <FooterItems>
          <FooterHeader>KDE NÁS NAJDETE</FooterHeader>
          <FooterItem>Restaurace Obecník</FooterItem>
          <FooterItem>Raškovice 207, 739 04</FooterItem>
          <FooterItem>
            <FooterLink href="https://www.google.com/maps" target="_blank">
              <HiLocationMarker/> zobrazit na mapě
            </FooterLink>
          </FooterItem>
        </FooterItems>

        {/* kontakty */}
        <FooterItems>
          <FooterHeader>KONTAKTY</FooterHeader>
          <FooterItem><HiPhone/> telefon:<span> +420 123 456 789</span></FooterItem>
          <FooterItem><HiMail/> email:<span> info@pizzerieobecnik.cz</span></FooterItem>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookSquare />
            </SocialIconLink>
            <SocialIconLink
              href="https://instagram.com"
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
          <FooterItem><HiOutlineClock/> po-pá:<span> 11:00-20:00</span></FooterItem>
          <FooterItem><HiOutlineClock/> so-ne:<span> 12:00-22:00</span></FooterItem>
        </FooterItems>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
