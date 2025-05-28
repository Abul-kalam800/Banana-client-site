import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Navigation , Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {


 



  const [text] = useTypewriter({
    words: ['Festival', 'Our'],
    loop: 0,
     typeSpeed:70,
      deleteSpeed:50,
       delaySpeed:1000,
  })
  const [first] = useTypewriter({
    words: ['Our','Event','Manegment'],
    loop: 0,
     typeSpeed:70,
      deleteSpeed:60,
       delaySpeed:1000,
  })
  const [third] = useTypewriter({
    words: ['For Our', 'Mind and body'],
    loop: 0,
     typeSpeed:70,
      deleteSpeed:60,
       delaySpeed:1000,
  })



  return (

    
    <div className="py-5">
      <Swiper
        spaceBetween={50}
        modules={[Pagination, Autoplay,Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true}}
        // onSlideChange={() => console.log("slide change")}
        
        // autoplay={{ delay: 3000 }}
        navigation
        // loop={true}
      >
        <SwiperSlide>
          <div className="w-screen h-[600px]  flex justify-center relative ">
            <div className="absolute w-full h-full bg-gray-500 mix-blend-multiply "></div>
            <div className="absolute px-5 text-yellow-300 flex flex-col  items-center top-52 justify-center">
              <h1 className="text-3xl md:text-6xl font-semibold tracking-wide">
                Banana Explore
                <span className="text-emerald-500"> {first} </span> 
              </h1>
               <span></span>
              <p className="tracking-wide text-xl mt-5 ">
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
        <div>

             <div className='App'>
     
    </div>
        </div>
        <SwiperSlide>
          <div className="w-screen h-[600px]  flex justify-center relative rounded-2xl">
            <div className="absolute w-full h-full bg-gray-500 mix-blend-multiply rounded-2xl"></div>
            <div className="absolute px-5 text-fuchsia-500 flex flex-col  items-center top-52 justify-center">
               <h1 className="text-3xl md:text-6xl font-semibold tracking-wide">
                Best fruits for ever 
                <span className="text-emerald-500"> {text} </span> 
              </h1>
           
              <p className="tracking-wide text-xl mt-5  ">
                Every tips will be helps us for next devloping and learing something better so give us your best tips
              </p>
              <button className="btn btn-lg mt-8">Explore</button>
            </div>
            <img
              src='https://i.postimg.cc/Tw9mqRPz/uganda-5005579-1920.jpg'
              className="w-full  object-cover rounded-2xl"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen h-[600px]  flex justify-center relative ">
            <div className="absolute w-full h-full bg-gray-500 mix-blend-multiply  "></div>
            <div className="absolute px-5 text-blue-300 flex flex-col  items-center top-52 justify-center">
                <h1 className="text-3xl md:text-6xl text-left font-semibold tracking-wide">
                Green view helpfull <br />
                <span className="text-emerald-500">{third} </span>
              </h1>
              <p className="tracking-wide text-xl mt-5 ">
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
