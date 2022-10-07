import styled from "styled-components";

import {
  IoArrowRedoCircleOutline,
  IoArrowUndoCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";

export const GalleryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
`;

export const GalleryItem = styled.div`
  display: Flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  min-width: 250px;
  max-width: 300px;
  height: 160px;
  flex: 1;
  cursor: pointer;
  transition: all 0.1s ease;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    transition: all 0.6s ease;

    
    :hover {
      transform: scale(1.05);
      filter: contrast(70%);
      filter: blur(1px);
      transition: all 0.6s ease;
    }
  }

`;

export const SliderWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: var(--color-gray90);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

`;

export const FullScreenImages = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 30px;

@media screen and (min-width: 992px) {
  padding: 50px;
  }


img {
  max-width: 100%;
  max-height: 100%;
  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`;

export const IconPrev = styled(IoArrowUndoCircleOutline)`
  position: fixed;
  cursor: pointer;
  opacity: 0.4;
  color: var(--color-white);
  z-index: 9999;
  font-size: 4rem;

  top: 50%;
  transform: translateY(-50%);
  left: 1%;

  :hover {
    opacity: 1;
  }
`;
export const IconNext = styled(IoArrowRedoCircleOutline)`
  position: fixed;
  cursor: pointer;
  opacity: 0.4;
  color: var(--color-white);
  z-index: 9999;
  font-size: 4rem;


  top: 50%;
  transform: translateY(-50%);
  right: 1%;

  :hover {
    opacity: 1;
  }
`;
export const IconClose = styled(IoCloseCircleOutline)`
  position: fixed;
  cursor: pointer;
  opacity: 0.6;
  color: var(--color-white);
  z-index: 9999;
  font-size: 3rem;


  top: 2%;
  right: 1%;

  :hover {
    opacity: 1;
  }
`;
