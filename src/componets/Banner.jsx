import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <div className="py-5">
      <Swiper
        spaceBetween={50}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
      >
        <SwiperSlide>
          <div className="w-screen h-screen flex justify-center relative">
            <div className="absolute w-full h-full bg-gray-500 mix-blend-multiply"></div>
            <div className="absolute text-yellow-300 flex flex-col  items-center top-52 justify-center">
              <h1 className=" text-6xl font-semibold tracking-wide">
                Banana Explore{" "}
                <span className="text-emerald-500"> Our Event </span> Manegment
              </h1>
              <p className="tracking-wide text-2xl mt-5 ">
                Thi is a wonderfully event arrange for banana trips and explore
              </p>
              <button className="btn btn-lg mt-8">Explore</button>
            </div>

            <img
              src="https://i.postimg.cc/J45CQJGj/datingscout-j-Ap-ZVFx9bn0-unsplash.jpg"
              className="w-full object-cover rounded-2xl"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen h-screen flex justify-center relative">
            <div className="absolute w-full h-full bg-gray-500 mix-blend-multiply"></div>
            <div className="absolute  text-fuchsia-500 flex flex-col  items-center top-52 justify-center">
              <h1 className=" text-6xl  font-semibold tracking-wide">
                Green view helpfull
                <span className="text-emerald-500"> for our </span>Mind and body
              </h1>
              <p className="tracking-wide text-xl mt-5  ">
                Every tips will be helps us for next devloping and learing something better so give us your best tips
              </p>
              <button className="btn btn-lg mt-8">Explore</button>
            </div>
            <img
              src="https://i.postimg.cc/BQX2T5hV/ahmad-fauzi-w-Cclt-Umeo-8-unsplash.jpg"
              className="w-full  object-cover rounded-2xl"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen h-screen flex justify-center relative">
            <div className="absolute w-full h-full bg-gray-500 mix-blend-multiply"></div>
            <div className="absolute text-red-300 flex flex-col  items-center top-52 justify-center">
              <h1 className=" text-6xl font-semibold tracking-wide">
                Best fruits for ever 
                <span className="text-emerald-500"> Our </span> Festival
              </h1>
              <p className="tracking-wide text-2xl mt-5 ">
               Sheare your idea with us and work together follow roules will be develop
              </p>
              <button className="btn btn-lg mt-8">Explore</button>
            </div>
            <img
              src="https://i.postimg.cc/ZYcCW94D/mtsjrdl-5-Iv8p1-Kd-DGA-unsplash.jpg"
              className="w-full overflow-hidden object-cover rounded-2xl"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
