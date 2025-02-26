import React, { useRef, useEffect } from "react";
import photo1 from "../../assets/images/20181220.webp";
import photo2 from "../../assets/images/20211117.webp";
import photo3 from "../../assets/images/20211117-2.webp";
import photo4 from "../../assets/images/20211118.webp";
import photo5 from "../../assets/images/20211222.webp";
import photo6 from "../../assets/images/20220618.webp";
import photo7 from "../../assets/images/20220618-2.webp";
import photo8 from "../../assets/images/20220620.webp";
import photo9 from "../../assets/images/20221017.webp";
import photo10 from "../../assets/images/20230218.webp";
import photo11 from "../../assets/images/20230701.webp";
import photo12 from "../../assets/images/20230701-2.webp";
import photo13 from "../../assets/images/20230702.webp";
import photo14 from "../../assets/images/20240319.webp";
import photo15 from "../../assets/images/20250125.webp";
import photo16 from "../../assets/images/20250126.webp";
import photo17 from "../../assets/images/20200618.webp";
import photo18 from "../../assets/images/20190329.webp";
import background from "../../assets/images/background.webp";
export default function RememberUs() {
  const imgList = [
    {
      img: photo1,
      text: "2018-12-20 臺北市政府",
    },
    {
      img: photo18,
      text: "2019-03-29 2222",
    },
    {
      img: photo17,
      text: "2020-06-18 東區",
    },
    {
      img: photo2,
      text: "2021-11-17 兒童新樂園",
    },
    {
      img: photo3,
      text: "2021-11-17 兒童新樂園",
    },
    {
      img: photo4,
      text: "2021-11-18 臺北小巨蛋",
    },
    {
      img: photo5,
      text: "2021-12-22 1403",
    },
    {
      img: photo6,
      text: "2022-06-18 苗栗國",
    },
    {
      img: photo7,
      text: "2022-06-18 苗栗國",
    },
    {
      img: photo8,
      text: "2022-06-20 桃園Xpark",
    },
    {
      img: photo9,
      text: "2022-10-17 甸記你",
    },
    {
      img: photo10,
      text: "2023-02-18 大安森林公園",
    },
    {
      img: photo11,
      text: "2023-07-01 太平洋",
    },
    {
      img: photo12,
      text: "2023-07-01 龜山島",
    },
    {
      img: photo13,
      text: "2023-07-02 宜蘭童玩節",
    },
    {
      img: photo14,
      text: "2024-03-19 廁所旁邊",
    },
    {
      img: photo15,
      text: "2025-01-25 荒郊野外",
    },
    {
      img: photo16,
      text: "2025-01-26 臺南",
    },
    {
      title: "一切順利",
      content: "TO：鴻春\n祝妳身體健康,\n記得要想我們!\n等妳回來♥\n2025-2-24",
    },
  ];
  const galleryRef = useRef(null);
  const time = 10000;

  const animStart = () => {
    if (
      galleryRef.current &&
      !galleryRef.current.classList.contains("active")
    ) {
      galleryRef.current.classList.add("active");
      setTimeout(() => {
        animEnd();
      }, time);
    }
  };

  const animEnd = () => {
    if (galleryRef.current) {
      galleryRef.current.classList.remove("active");
      // 強制重新佈局 (reflow)
      void galleryRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    // 當 scroll 或 resize 時執行動畫
    const handleScroll = () => animStart();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", animStart);

    // 初始化動畫
    animStart();

    // 清除事件監聽器
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", animStart);
    };
  }, []);
  return (
    <div
      className="relative w-full bg bg-cover p-10 bg-fixed flex flex-wrap justify-center items-center gap-5 bg-center h-full text-stone-700"
      id="gallery"
      ref={galleryRef}
      style={{ backgroundImage: `url(${background})` }}
    >
      {imgList?.map((item, index) => (
        <figure
          className="CARD w-52 bg-white/60 h-60 px-4 rounded backdrop-blur-xs shadow-lg shadow-black/20  flex flex-col gap-2"
          key={index}
        >
          {item.img ? (
            <>
              <img
                className="aspect-square mt-4 object-center object-cover "
                loading="lazy"
                src={item.img}
                alt={item.text}
                title={item.text}
              />
              <figcaption className="w-full text-center truncate ">
                {item.text}
              </figcaption>
            </>
          ) : (
            <div className="pt-10 flex flex-col items-center justify-center gap-3">
              <div className="text-2xl">{item.title}</div>
              <div className="whitespace-pre-line ">{item.content}</div>
            </div>
          )}
        </figure>
      ))}
    </div>
  );
}
