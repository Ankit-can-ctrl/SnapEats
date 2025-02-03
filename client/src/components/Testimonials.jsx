import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MainButton from "../components/MainButton";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ClientCard from "./ClientCard";
function Testimonials() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center py-20 px-10 md:p-20">
      <div className="heading flex flex-col gap-10 items-center ">
        <h1 className=" text-4xl md:text-8xl font-heavy text-center">
          What our customers say about us!
        </h1>
        <p className="text-center text-gray-500 md:max-w-[60%]">
          Amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet
          risus tempor semper odio egestas id pulvinar consectetur elit tortor
          non hac pellentesque lacus donec accumsan quisque ultricies adipiscing
          mauris tortor cras est eu accumsan mauris.
        </p>
      </div>
      <div className="carousel w-full">
        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            font-weight: bolder;
            stroke-width: 2; /* Increases line thickness */
          }
        `}</style>
        <Swiper
          style={{
            "--swiper-pagination-color": "#ff0000", // Red pagination bullets
            "--swiper-navigation-color": "#ff0000", // Green nav buttons
            "--swiper-navigation-size": "15px", // Optional: button size
            "--swiper-navigation-weight": "60px",
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="btns flex flex-col md:flex-row gap-5">
        <MainButton type={"secondary"} text={"View More"} />
        <MainButton type={"primary"} text={"View More"} />
      </div>
    </div>
  );
}

export default Testimonials;
