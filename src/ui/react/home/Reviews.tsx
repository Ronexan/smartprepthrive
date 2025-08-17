import { useState, useEffect } from "react"
import { motion } from "motion/react"
import reviewsData from "../services/data"
import "../services/services.css"

import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Reviews() {
  const [ data, setData ] = useState<any[]>();

  useEffect(() => {
    let array: any[] = []

    reviewsData.forEach(item => {
      if (item.reviews) {
        array = array.concat(item.reviews)
      }
    })

    console.log(array)
    setData(array)
  }, []);

  return (
    <motion.section
      className="mt-20 mb-10 m-auto max-w-[1200px] p-2"
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut"
      }}
      viewport={{ once: true }}
    >
      <h1 className="font-bagel text-primary text-[3rem] text-center">Reviews</h1>

      {data && <Swiper
        className="relative w-full max-w-[1000px] h-[350px] sm:h-[350px] px-[20px]"
        modules={[ Navigation, Pagination ]}
        autoplay={true}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: "bullet",
          bulletActiveClass: "bullet-active"
        }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev"
        }}
        spaceBetween={10}
        style={{
          padding: "0 10px"
        }}
      >
        {data.map(review => (
          <SwiperSlide className="bg-gray-100 rounded-md py-2 px-[52px]">
            <div className="m-auto px-2 h-full flex flex-col justify-center">
              <div className="flex items-center gap-1">
                <span className="font-bold text-xl">{review.name || "Reviewer"}</span>
              </div>
              {review.location && <div className="flex items-center gap-1 text-black/70 pl-[2px]">
                <FaLocationDot size={16} />
                <span className="text-[0.8rem]">{review.location}</span>
              </div>}
              <p className="text-[1rem] italic">
                {review.review}
              </p>
            </div>
          </SwiperSlide>
        ))}

        <button className="next absolute top-1/2 right-[15px] z-50 cursor-pointer hover:text-primary">
          <IoIosArrowForward size={25} />
        </button>
        <button className="prev absolute top-1/2 left-[15px] z-50 cursor-pointer rotate-180 hover:text-primary">
          <IoIosArrowForward size={25} />
        </button>
      </Swiper>}
    </motion.section>
  )
}