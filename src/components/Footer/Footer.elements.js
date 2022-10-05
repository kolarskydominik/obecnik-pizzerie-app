import styled from "styled-components";

export const FooterContainer = styled.section`
  background-color: var(--color-black);
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterWrap = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const FooterItems = styled.div`
  padding: 20px;
  display: flex;
  min-width: 240px;
  flex-direction: column;
  text-align: center;
`;
export const FooterHeader = styled.h2`
  font-weight: 500;
  color: var(--color-white90);
  padding-bottom: 0.4rem;
`;

export const FooterItem = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--color-white60);

  padding-bottom: 0.1rem;

  svg {
    color: var(--color-white90);
    position: relative;
    top: 3px;
  }
  span {
    color: var(--color-white80);
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-white90);
  transition: all 0.1s ease-in-out;

  &:hover {
    color: var(--color-white70);

    transition: all 0.1s ease-in-out;
  }

  svg {
    position: relative;
    top: 2px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialIconLink = styled.a`
  font-size: 2.5rem;
  padding: 8px 4px 0 4px;
  color: var(--color-white90);

  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--color-white60);
    transition: all 0.2s ease-in-out;
  }
`;
