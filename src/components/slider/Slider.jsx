import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../slider/style/style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Slider() {
  const [slideData, setSlideData] = useState([]);
  useEffect(() => {
    fetch("slider.json")
      .then((res) => res.json())
      .then((data) => setSlideData(data));
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative"
      >
        {/* slider 1 */}
        {slideData?.map((slide) => (
          <SwiperSlide key={slide.id} className=" relative">
            <img
              className=" h-60 object-fit lg:h-full"
              src={slide?.image}
              alt=""
            />
            <div className=" bg-slate-50/90 absolute h-full w-full"></div>
            <div className=" absolute  top-24 right-16 md:right-32 flex flex-col items-end">
              <h1 className=" text-lg md:text-2xl lg:text-4xl font-semibold text-[#4B5563] mb-2 lg:mb-4">
                {slide?.name}
              </h1>
              <button className=" px-2 md:px-3 lg:px-5 py-1 md:py-2 lg:py-3 text-[#4B5563] font-semibold border border-slate-700 text-sm md:text-base flex justify-center gap-2 items-center hover:bg-[#2CD4BF] hover:border-none rounded-sm hover:text-white">
                Order Now <FaArrowRightLong />{" "}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
