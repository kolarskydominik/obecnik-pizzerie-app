import styled from "styled-components";

export const OrderInfoWrap = styled.div`
  h3 {
    font-size: 1.75rem;

    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }
  }

  p,
  a {
    font-size: 1.2rem;
    text-align: center;
  }
  a {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
    /* font-family: var(--fonts-heading); */
    text-decoration: none;
    color: var(--color-primary);
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 1);


  }
`;
