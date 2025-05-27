import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import rivew1 from "../assets/revier1.jpg";
import rivew2 from "../assets/review2.jpg";
import rivew3 from "../assets/review3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Review = () => {
  return (
    <div className="my-20">
      <h2 className="text-center text-4xl font-semibold mt-20">
        Our Customer Review
      </h2>
      <Swiper
        spaceBetween={50}
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log("slide change")}

        autoplay={{ delay: 3000 }}
        navigation
        loop={true}
      >
       <SwiperSlide>
         <div className="w-8/12 mx-auto mt-10">
          <div className="mb-10">
            <span className="opacity-30">
              <FaQuoteLeft size={40} />
            </span>
          </div>
          <div className="flex flex-col md:flex-row  gap-10  items-center">
            <div className="w-30 h-30 rounded-full bg-red-300 object-cover ">
              <img
                src={rivew1}
                className=" w-full h-full object-cover rounded-full"
                alt="photo"
              />
            </div>

            <p>
              This site gardener tips is very good sevices is very professonial
              I am so happy work with them .so you can join this site for your
              bujness
            </p>
          </div>
          <div className="mt-10 flex justify-end">
            <span className="opacity-30">
              <FaQuoteRight size={40} />
            </span>
          </div>
        </div>
       </SwiperSlide>

       <SwiperSlide>
         <div className="w-8/12 mx-auto mt-10">
          <div className="mb-10">
            <span className="opacity-30">
              <FaQuoteLeft size={40} />
            </span>
          </div>
          <div className="flex flex-col md:flex-row  gap-10  items-center">
            <div className="w-30 h-30  rounded-full bg-red-300 object-cover ">
              <img
                src={rivew2}
                className=" w-full h-full object-cover rounded-full"
                alt="photo"
              />
            </div>

            <p>
              This site gardener tips is very good sevices is very professonial
              I am so happy work with them .so you can join this site for your
              bujness
            </p>
          </div>
          <div className="mt-10 flex justify-end">
            <span className="opacity-30">
              <FaQuoteRight size={40} />
            </span>
          </div>
        </div>
       </SwiperSlide>

     <SwiperSlide>
           <div className="w-8/12 mx-auto mt-10">
          <div className="mb-10">
            <span className="opacity-30">
              <FaQuoteLeft size={40} />
            </span>
          </div>
          <div className="flex flex-col md:flex-row  gap-10  items-center">
            <div className="w-30 h-30  rounded-full bg-red-300 object-cover object-center ">
              <img
                src={rivew3}
                className=" w-full h-full object-cente object-cover rounded-full "
                alt="photo"
              />
            </div>

            <p>
              This site gardener tips is very good sevices is very professonial
              I am so happy work with them .so you can join this site for your
              bujness
            </p>
          </div>
          <div className="mt-10 flex justify-end">
            <span className="opacity-30">
              <FaQuoteRight size={40} />
            </span>
          </div>
        </div>
     </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
