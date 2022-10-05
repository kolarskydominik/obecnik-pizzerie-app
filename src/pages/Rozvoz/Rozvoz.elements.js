import styled from "styled-components";

import {
    SectionHeader,
  } from "../../globalStyles";
  import img from "../../images/pizza.jpg";

export const SectionHeaderHome = styled(SectionHeader)`
background-image: url(${img});
height: 60vh;
background-attachment: fixed;
position: relative;
z-index: 0;
text-shadow: 0px 2px 2px rgba(0,0,0,1);

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