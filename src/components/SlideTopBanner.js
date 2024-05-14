import React, { useEffect, useRef } from "react";

const SlideTopBanner = () => {
  useEffect(() => {
    const dataUrl = "./apis/banner.json";
    fetch(dataUrl)
      .then(respose => {
        const result = respose.json();

        return result;
      })
      .then(result => {
        console.log(result);
        let tagS = "";

        result.forEach((item, index, arr) => {
          const temp = `<div class="swiper-slide">
            <a href="${item.url}" style="background: url('./images/${item.pic}') no-repeat center; background-size:cover;">
            <p class="slide-title">${item.title}</p>
            </a>
        </div>`;
          tagS = tagS + temp;
        });

        const whereTag = document.querySelector(".bannerslide .swiper-wrapper");
        whereTag.innerHTML = tagS;
        const bannerSlide = new Swiper(".bannerslide", {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      })
      .catch(error => {
        console.log(error);
      });

    return () => {};
  }, []);

  return (
    <div className="main-top-banner br-20">
      <div className="swiper bannerslide">
        <div className="swiper-wrapper"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SlideTopBanner;
