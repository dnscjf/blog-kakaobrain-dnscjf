import { useEffect, useState } from "react";
import MainBottomCardsItem from "./MainBottomCardsItem";

const MainBottomCards = () => {
  const [cardSlide, setCardSlide] = useState(null);
  const [cardList, setCardList] = useState([]);

  function makeCardSlide() {
    const wWidth = window.innerWidth;
    if (wWidth > 1024) {
      if (cardSlide !== null) {
        cardSlide.destroy();
        setCardSlide(null);
      }
    } else {
      if (cardSlide === null) {
        const tempSlide = new Swiper(".cardslide", {
          loop: true,
          slidesPerView: 4,
          spaceBetween: 20,
        });
        setCardSlide(tempSlide);
      }
    }
  }
  // hook 자리
  useEffect(() => {
    const dataUrl = "./apis/cards.json";
    fetch(dataUrl)
      .then(response => {
        const result = response.json();
        return result;
      })
      .then(result => {
        setCardList(result);
        makeCardSlide();
      })
      .catch(error => {
        console.log(error);
      });

    window.addEventListener("resize", makeCardSlide);

    return () => {
      window.removeEventListener("resize", makeCardSlide);
    };
  }, []);

  return (
    <div className="main-bottom-cards">
      <h2>폴더 📁</h2>
      {/* <!-- 카드 슬라이드 --> */}
      <div className="main-bottom-cards-slide">
        {/* <!-- 외부데이터 연동 --> */}
        <div className="swiper cardslide">
          <div className="swiper-wrapper">
            {cardList.map((item, index) => (
              <MainBottomCardsItem
                key={index}
                link={item.link}
                imgpath={item.imgpath}
                cardname={item.cardname}
                cardno={item.cardno}
              ></MainBottomCardsItem>
            ))}
          </div>
        </div>
      </div>

      <div className="bt-wrap">
        <a href="#" className="bt-more">
          전체보기
        </a>
      </div>
    </div>
  );
};

export default MainBottomCards;
