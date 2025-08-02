import { motion } from "motion/react"
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import "./services.css"
import services from "./data"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Services() {
  return (
    <section className="p-2">
      {services.map(service => (
        <Service title={service.title} id={service.id} image={service.image} reviews={service?.reviews}>
          {service.body}
        </Service>
      ))}
    </section>
  )
}

function Service({
  title,
  id,
  image,
  children,
  reviews
}: {
  title: string;
  id?: string;
  image?: string;
  children: React.ReactNode;
  reviews?: any[]
}) {
  return (
    <motion.div
      id={id}
      className="border-2 border-primary overflow-hidden rounded-md flex flex-col m-auto
        max-w-[750px] shadow-lg mb-20"
      initial={{ translateY: 100, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 1,
        ease: "easeOut"
      }}
    >
      <img src={image || "/teaching.jpg"} className="w-full flex[0_1_300px] sm:flex[0_1_400px] object-cover" />
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex-1 p-2">
          <h1 className="font-bagel text-[2.6rem] text-primary">
            {title}
          </h1>
          <div className="service-content">
            {children}
          </div>
        </div>
        {reviews && <Review reviews={reviews} />}
      </div>
    </motion.div>
  )
}

function Review({ reviews }: { reviews: any[] }) {
  const slideClassname = `bg-gray-100 rounded-md py-2 px-[25px]`

  return (
    <div className="flex-[0_1_auto] pb-2">
      <h2 className="font-bagel text-primary text-lg mb-1 p-2">Reviews</h2>

      <Swiper
        className="relative w-full h-[350px] sm:h-[250px] px-[20px]"
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
        {reviews.map(review => (
          <SwiperSlide className={slideClassname}>
            <div className="m-auto px-2 h-full flex flex-col justify-center">
              <div className="flex items-center gap-1">
                <IoPersonCircleOutline size={28} />
                <span className="font-bold">{review.name || "Reviewer"}</span>
              </div>
              {review.location && <div className="flex items-center gap-1 text-black/70 pl-[2px]">
                <FaLocationDot size={16} />
                <span className="text-[0.8rem]">{review.location}</span>
              </div>}
              <p className="text-[0.95rem] px-2">
                {review.review}
              </p>
            </div>
          </SwiperSlide>
        ))}

        <button className="next absolute top-1/2 right-[10px] z-50 cursor-pointer hover:text-primary">
          <IoIosArrowForward size={25} />
        </button>
        <button className="prev absolute top-1/2 left-[10px] z-50 cursor-pointer rotate-180 hover:text-primary">
          <IoIosArrowForward size={25} />
        </button>
      </Swiper>
    </div>
  )
}