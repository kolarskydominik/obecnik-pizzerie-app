import styled from "styled-components";
import { GiFullPizza } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

import { SectionWrapper } from "../../globalStyles";

export const Nav = styled.nav`
  width: 100%;
  /* background: var(--color-gray90); */
  background: ${({ scrollNav }) =>
    scrollNav ? "linear-gradient(var(--color-black) 20%, var(--color-black2) 100%)" : "transparent"};
  height: 60px;
  /* height: ${({ scrollNav }) => (scrollNav ? "60px" : "80px")}; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all 0.4s ease-in-out;

  @media screen and (min-width: 768px) {
    background: ${({ scrollNav }) =>
    scrollNav ? "linear-gradient(var(--color-black) 20%,var(--color-black2) 100%)" : "transparent"};
    height: ${({ scrollNav }) => (scrollNav ? "60px" : "80px")};
  }
`;

export const NavbarContainer = styled(SectionWrapper)`
  display: flex;
  justify-content: space-between;
  height: 100%;

  h1 {
    height: 100%;
    display: flex;
  }

  ${SectionWrapper}
`;

// export const NavLogo = styled(Link)`
//   color: var(--color-lightYellow);
//   justify-self: flex-start;
//   cursor: pointer;
//   text-decoration: none;
//   font-size: 2rem;
//   display: flex;
//   align-items: center;
//   font-family: var(--fonts-heading);
//   position: relative;
//   height: 90%;

//   &:after {
//     content: "restaurant • pizzeria";
//     white-space: nowrap;
//     font-family: var(--fonts-body);
//     font-size: .8rem;
//     position: absolute;
//     left: 0px;
//     bottom: 5px;
//   }
// `;

export const NavLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

    img {
      height: 44px;
    }
`;

export const NavIcon = styled(GiFullPizza)``;

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  text-align: center;
  font-size: 1.5rem;
  z-index: -1;

  width: 100%;
  /* min-height: 450px; */
  position: absolute;
  top: 0;
  padding-top: 60px;
  padding-bottom: 10px;
  /* top: ${({ scrollNav }) => (scrollNav ? "60px" : "80px")}; */
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  opacity: 1;
  transition: all 0.5s ease;
  /* background: var(--color-black); */
  background: linear-gradient(176deg, var(--color-black) 20%,var(--color-black2) 100%);

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    min-height: 100%;
    height: 100%;
    width: auto;
    background: unset;
    transition: unset;
    font-size: 0.9rem;
    padding: unset;
    z-index: unset;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  width: 100%;

  @media screen and (min-width: 768px) {
    /* width: ; */
  }
`;

export const NavLinks = styled(NavLink)`
  color: var(--color-lightYellow);
  display: table;
  line-height: 80px;
  text-decoration: none;
  height: 100%;
  width: 100%;
  text-transform: uppercase;
  white-space: nowrap;
  transition: ease-in-out 0.4s;

  &:hover {
    background-color: var(--color-primary);
    transition: ease-in-out 0.4s;

    @media screen and (min-width: 768px) {
      background-color: unset;
      transition: unset;
    }
  }

  @media screen and (min-width: 768px) {
    width: unset;
    padding: 0.5rem 1.5rem;
    /* margin: 0 0.5rem; */
    display: flex;
    align-items: center;
    position: relative;
    &:hover {
      color: var(--color-primary);
      transition: ease-in-out 0.3s;
    }
    &:after {
      content: "";
      position: absolute;
      border-radius: 1px;
      left: 0;
      bottom: 10px;
      width: 0%;
      height: 2px;
      opacity: 0;
      background: var(--color-primary);
      transition: ease-in-out 0.3s;
      -webkit-transition: ease-in-out 0.3s;
    }
    /* &.active:after {
      opacity: 1;
      width: 100%;
    } */
    &.active {
      color: var(--color-primary);
    }
    &:hover:after {
      opacity: 1;
      width: 100%;
      transition: ease-in-out 0.3s;
    }
  }

  @media screen and (min-width: 992px) {
    margin: 0 1rem;
  }
`;
