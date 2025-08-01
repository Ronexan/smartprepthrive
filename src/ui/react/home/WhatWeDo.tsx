import { IoIosArrowRoundForward } from "react-icons/io";
import classNames from "classnames";
import { motion } from "motion/react";

export default function WhatWeDo() {
  return (
    <motion.section
      className="mt-12 w-full flex justify-center bg-[url('/pattern.jpg')] min-h-[500px] overflow-hidden"
      style={{
        backgroundSize: "150px"
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeInOut"
      }}
      viewport={{ once: true }}
    >
      <div className="w-full min-h-[inherit] bg-white/50 p-2">
        <h1 className="font-bagel text-[3rem] text-primary text-center mb-5">
          What We Do
        </h1>

        <Feature title="SEN Training">
          <p>Smartprep special Education Training Academy( S-SETA)</p>
        </Feature>

        <Feature title="Direct Therapy Services" reverse>
          <p>Smartprep special Education Training Academy( S-SETA)</p>
        </Feature>

        <Feature title="SEN Consultations" image="/consultation.jpg">
          <p>Smartprep special Education Training Academy( S-SETA)</p>
        </Feature>

        <div className="m-auto w-full max-w-[1100px]">
          <a
            className="flex-[0_0_auto] mt-5 mb-6 text-primary text-[1.5rem] font-bold max-w-fit flex items-center gap-1 hover:border-b-1"
            href="/our-services"
          >
            <span>
              See more of our services
            </span>
            <IoIosArrowRoundForward size={30} />
          </a>
        </div>
      </div>
    </motion.section>
  )
}

function Feature({
  title,
  image,
  children,
  link,
  reverse
}: {
  title: string;
  image?: string;
  children: React.ReactNode;
  link?: string;
  reverse?: boolean;
}) {
  const classname = classNames(
    "m-auto mb-10 w-full max-w-[1100px] bg-gray-200 rounded-2xl overflow-hidden",
    reverse ? "flex flex-col sm:flex-row-reverse" : "flex flex-col sm:flex-row"
  )

  let variants = {
    swipeInLeft: {
      opacity: 0,
      translateX: -100
    },
    swipeInRight: {
      opacity: 0,
      translateX: 100
    },
  }

  return (
    <motion.div
      className={classname}
      variants={variants}
      initial={ reverse ? "swipeInRight" : "swipeInLeft" }
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeInOut"
      }}
      viewport={{ once: true }}
    >
      <div className="flex-[0_1_200px] sm:flex-[0_1_30%] sm:h-[220px]">
        <img className="object-cover w-full h-full" src={image || "/teaching.jpg"} />
      </div>
      <div className="flex-1 p-2 flex flex-col gap-2">
        <div className={`flex-1`}>
          <h2 className="font-bagel text-[2rem] text-primary">
            {title}
          </h2>
          {children}
        </div>
        <a
          className={`flex-[0_0_auto] mt-5 text-primary max-w-fit flex items-center gap-1 hover:border-b-1`}
          href={link || "#"}
        >
          <span>Learn More</span>
          <IoIosArrowRoundForward size={30} />
        </a>
      </div>
    </motion.div>
  )
} 