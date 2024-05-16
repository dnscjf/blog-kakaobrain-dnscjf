import React, { useEffect, useRef, useState } from "react";
import SlideTopBannerItem from "./SlideTopBannerItem";

const SlideTopBanner = () => {
  const [list, setList] = useState([]);

  // js 코드 자리
  useEffect(() => {
    const dataUrl = "./apis/banner.json";
    fetch(dataUrl)
      .then(respose => {
        const result = respose.json();

        return result;
      })
      .then(result => {
        console.log(result);

        setList(result);

        // let tagS = "";

        // result.forEach((item, index, arr) => {
        //   const temp = `<div class="swiper-slide">
        //     <a href="${item.url}" style="background: url('./images/${item.pic}') no-repeat center; background-size:cover;">
        //     <p class="slide-title">${item.title}</p>
        //     </a>
        // </div>`;
        //   tagS = tagS + temp;
        // });

        // const whereTag = document.querySelector(".bannerslide .swiper-wrapper");
        // whereTag.innerHTML = tagS;
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
        <div className="swiper-wrapper">
          {list.map((item, index, arr) => (
            <SlideTopBannerItem
              key={index}
              url={item.url}
              pic={item.pic}
              title={item.title}
            ></SlideTopBannerItem>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SlideTopBanner;
