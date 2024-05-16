import React, { useEffect } from "react";

const SlideTopBannerItem = ({ url, pic, title }) => {
  const styleBanner = {
    background: `url('./images/${pic}') no-repeat center`,
    backgroundsize: "cover",
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="swiper-slide">
      <a href={url} style={styleBanner}>
        <p className="slide-title">{title}</p>
      </a>
    </div>
  );
};

export default SlideTopBannerItem;
