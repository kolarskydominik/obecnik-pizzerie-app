import React, { useState } from "react";

import {
  GalleryWrap,
  GalleryItem,
  SliderWrap,
  IconPrev,
  IconNext,
  IconClose,
  FullScreenImages,
} from "./Gallery.elements";

const Gallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  return (
    <>
      {openModal && (
        <SliderWrap>
          <IconClose onClick={handleCloseModal} />
          <IconPrev onClick={prevSlide} />
          <IconNext onClick={nextSlide} />
          <FullScreenImages>
            <img src={galleryImages[slideNumber].img} alt="" />
          </FullScreenImages>
        </SliderWrap>
      )}

      <GalleryWrap>
        {galleryImages &&
          galleryImages.map((item, index) => {
            return (
              <GalleryItem key={index} onClick={() => handleOpenModal(index)}>
                <img src={item.img} alt="" />
              </GalleryItem>
            );
          })}
      </GalleryWrap>
    </>
  );
};

export default Gallery;
