import styled from "styled-components";

export const OrderInfoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  font-size: 16px;
  width: 100%;
  @media screen and (min-width: 500px) {
    gap: 3rem;
  }

  > div:nth-child(1) {
    min-width: 250px;
    max-width: 400px;
    flex: 1;
    margin-bottom: 2rem;
    p,
    a,
    h3 {
      text-align: right;
    }
    h3 {
      padding: 0;
      padding-bottom: 1.2rem;
    }
  }

  > div:nth-child(2) {
    min-width: 250px;
    max-width: 380px;
    flex: 1;
    margin-bottom: 2rem;
    p,
    h4 {
      text-align: left;
    }
  }

  h3 {
    font-size: 40px;
    color: var(--color-primary);
  }
  h4 {
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 0.25rem;
    color: var(--color-primary);
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 1);
  }

  p,
  a {
    font-size: 1.2rem;
    text-align: center;
    > span {
      font-weight: bold;
    }
  }
  a {
    display: block;
    font-size: 2rem;
    font-style: italic;
    /* font-family: var(--fonts-heading); */
    text-decoration: none;
    color: var(--color-primary80);
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 1);

    &:hover {
      color: var(--color-primary);
    }
  }
`;
