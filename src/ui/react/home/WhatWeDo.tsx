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

        <Feature title="Smartprep EdThera Advantage" link="/our-services#edThera">
          <p>
            At SmartPrep EduThera, we believe that every child—regardless of their learning ability—deserves to be
            seen, heard, and supported.
          </p>
        </Feature>

        <Feature title="SmartPrepTX" image="/school.jpg" reverse link="/our-services#tx">
          <p>At SmartPrepTX, we understand that raising or educating a child with special needs can be both beautiful and overwhelming. You don't have to do it alone.</p>
        </Feature>

        <Feature title="Smartprep Theramove" image="/kids-in-circle.jpg" link="/our-services#theramove">
          <p>At SmartPrep TheraMove, we believe awareness is the first step to change—and inclusion begins with understanding.</p>
        </Feature>

        <Feature title="Smartprep Consult" image="/therapy.jpg" reverse link="/our-services#consult">
          <p>
            Raising or educating a child with special needs often comes with more questions than answers.
            At SmartPrep Consult, we're here to listen, walk with you, and guide you toward the right steps—at the right time—with the right people.
          </p>
        </Feature>

        <div className="m-auto w-full max-w-[1100px]">
          <a
            className="flex-[0_0_auto] mt-5 mb-6 text-primary text-[1.5rem] font-bold max-w-fit flex items-center gap-1 hover:border-b-1"
            href="/our-services"
          >
            <span>
              See all our services
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
          <span className="text-sm">{children}</span>
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