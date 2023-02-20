import styled from "styled-components";
import { SectionWrapper } from "../../globalStyles";

export const Wrapper = styled(SectionWrapper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  >p {
    font-size: 1rem;
    max-width: 1150px;
    z-index: 2;
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    text-align: center;
  }

  h3 {
    font-size: 3rem;
    text-align: center;
    font-family: var(--fonts-heading);
    color: var(--color-primary);
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 1);

    padding: 1rem;
    width: 100%;
  }
`;

export const MenuWrap = styled.div`
  color: var(--color-gray90);
  min-width: 280px;
  max-width: 500px;
  flex: 1;

  h4 {
    font-size: 22px;
    color: var(--color-gray70);
    font-family: var(--fonts-heading);
    padding: 1rem 0 0 0;
  }
`;
