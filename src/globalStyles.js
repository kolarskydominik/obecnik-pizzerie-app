import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";


const GlobalStyle = createGlobalStyle`
:root {
  --fonts-body: 'Open Sans', sans-serif;
  --fonts-heading: "Kaushan Script", cursive;

  --color-lightYellow: #F2F2EC;
  --color-white: #FFF;
  --color-black: #1E1E1E;
  --color-black2: #1b1b1b;
  --color-primary: rgba(212, 157, 86, 1);
  --color-primary80: rgba(212, 157, 86, 0.8);

  --color-gray90: rgba(0, 0, 0, 0.9);
  --color-gray80: rgba(0, 0, 0, 0.8);
  --color-gray70: rgba(0, 0, 0, 0.7);
  --color-gray60: rgba(0, 0, 0, 0.6);
  --color-gray50: rgba(0, 0, 0, 0.5);
  --color-gray40: rgba(0, 0, 0, 0.4);
  --color-gray30: rgba(0, 0, 0, 0.3);
  --color-gray20: rgba(0, 0, 0, 0.2);
  --color-gray10: rgba(0, 0, 0, 0.1);
  --color-white90: rgba(255, 255, 255, 0.9);
  --color-white80: rgba(255, 255, 255, 0.8);
  --color-white70: rgba(255, 255, 255, 0.7);
  --color-white60: rgba(255, 255, 255, 0.6);

}
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--fonts-body);
} 

/* html {
  overflow-x: hidden;
} */
body {
  background: linear-gradient(176deg, var(--color-black) 20%,var(--color-black2) 100%);
  width: 100%;
}
`;

export const SectionHeader = styled.div`
  display: flex;
  position: relative;
  margin-top: -80px;
  height: 100vh;
  align-items: center;
  justify-content: center;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  font-family: var(--fonts-heading);
  color: var(--color-lightYellow);
  font-size: 6rem;
`;

export const SectionHeaderHome = styled(SectionHeader)`
  background-image: url(${props => props.image});
  background-position: top;
  background-attachment: fixed;

  text-shadow: 0px 2px 2px rgba(0, 0, 0, 1);
  height: 60vh;
  position: relative;
  z-index: 0;

  &:before {
    background: linear-gradient(
      var(--color-gray80),
      var(--color-gray30),
      var(--color-gray30)
    );
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

export const SectionContainer = styled.div`
  width: 100%;
  background: var(--color-lightYellow);
  display: flex;
  justify-content: center;
  /* min-height: 90vh; */

`;

export const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 25px;

  @media screen and (min-width: 768px) {
    padding: 0 50px;
  }
`;

export const LineDivider = styled.hr`
    /* border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    border-bottom: 1px solid rgba(212, 157, 86, 0.3); */

    margin: 6px 0;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(30,30,30, .8), rgba(30,30,30, 0.4), rgba(30,30,30, 0.1));
`

export const LinkBtn = styled(Link)`
  z-index: 2;
  text-decoration: none;
  white-space: nowrap;
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  margin: 2rem auto 1.5rem;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  cursor: pointer;

  &:hover {
    color: var(--color-lightYellow);
    background: var(--color-primary);
    font-weight: 500;
  }
`;

export default GlobalStyle;