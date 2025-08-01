import { motion } from "motion/react"
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import "./services.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Services() {
  const ulClassname = "my-4 pl-3"
  return (
    <section className="p-2">
      <div className="m-auto mb-10 w-full max-w-[1100px] grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-4">
        <Service title="Special Needs Education Training">
          <p>Our curriculum and training is powered, approved and certified by:</p>
          <ul className={ulClassname}>
            <li>The national center for learning disabilities(NCLD), USA.</li>
            <li>International disability alliance (IDA)</li>
            <li>Inclusion International</li>
          </ul>
          <p>Our certificates are globally recognised and accepted.</p>
          <h2></h2>
        </Service>
        <Service title="Direct Therapy Intervention Service">
          <p>For schools and private individuals. Our offered services here are:</p>
          <ul className={ulClassname}>
            <li>Identification and assessment of disabilities</li>
            <li>Management of Behavioural disorders</li>
            <li>Sensory integration</li>
            <li>Cognitive therapy</li>
            <li>ABA therapy</li>
          </ul>
          <p>Our therapists have been duly trained and screened socially and security wise just to check the box of the safety of your wards..</p>
        </Service>
        <Service title="Handwriting Intervention services" image="/kid-writing.jpg">
          <p>
            Made in mind for children struggling in writing skills. We help train them to perform well
            in writing despite limitations.
          </p>
          <ul className={ulClassname}>
            <li>Identification and assessment of disabilities</li>
            <li>Management of Behavioural disorders</li>
            <li>Sensory integration</li>
            <li>Cognitive therapy</li>
            <li>ABA therapy</li>
          </ul>
          <p>Our therapists have been duly trained and screened socially and security wise just to check the box of the safety of your wards..</p>
        </Service>
        <Service title="School Consultancy" image="/school.jpg">
          <p>
            We offer school consultancy services such as:
          </p>
          <ul className={ulClassname}>
            <li>SEN unit setup and management</li>
            <li>SEN Evaluation and assessment of learners</li>
            <li>Individualised Educational Plan(IEP) development.</li>
            <li>Training of staff on SEN matters</li>
          </ul>
        </Service>
        <Service title="Homeschooling Services" image="/school.jpg">
          <p>
            We offer school consultancy services such as:
          </p>
          <ul className={ulClassname}>
            <li>SEN unit setup and management</li>
            <li>SEN Evaluation and assessment of learners</li>
            <li>Individualised Educational Plan(IEP) development.</li>
            <li>Training of staff on SEN matters</li>
          </ul>
        </Service>
        <Service title="Parent Role-Playing Services">
          <p>
            We offer school consultancy services such as:
          </p>
          <ul className={ulClassname}>
            <li>SEN unit setup and management</li>
            <li>SEN Evaluation and assessment of learners</li>
            <li>Individualised Educational Plan(IEP) development.</li>
            <li>Training of staff on SEN matters</li>
          </ul>
        </Service>
      </div>
    </section>
  )
}

function Service({
  title,
  image,
  children
}: {
  title: string;
  image?: string;
  children: React.ReactNode
}) {
  return (
    <motion.div
      className="border-2 border-primary overflow-hidden rounded-md flex flex-col"
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
          <div className="">
            {children}
          </div>
        </div>
        <Review />
      </div>
    </motion.div>
  )
}

function Review() {
  const slideClassname = `bg-gray-100 rounded-md py-2 px-[25px]`

  return (
    <div className="flex-[0_1_auto] pb-2">
      <h2 className="font-bagel text-primary text-lg mb-1 p-2">Reviews</h2>

      <Swiper
        className="relative w-full h-[250px] px-[20px]"
        modules={[ Navigation, Pagination ]}
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
        {Array.from({ length: 3 }).map(_ => (
          <SwiperSlide className={slideClassname}>
            <div className="m-auto max-w-[70%] h-full flex flex-col justify-center">
              <div className="flex items-center gap-1">
                <IoPersonCircleOutline size={28} />
                <span className="font-bold">User</span>
              </div>
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis suscipit ut mi pellentesque interdum. Pellentesque et ipsum imperdiet,
                accumsan urna sit amet, iaculis purus. Etiam nec arcu tristique, elementum dui eget,
                luctus ante. Suspendisse sollicitudin enim.
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