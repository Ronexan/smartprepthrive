import { FaEye } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { motion } from "motion/react";

export default function Goals() {
  return (
    <section className="m-auto mt-12 max-w-[1100px] p-2">
      <h1 className="text-primary font-bold text-[2.3rem]">
        Our Goals
      </h1>

      <div className="mt-5">
        <motion.div
          className="flex flex-col sm:flex-row w-full rounded-md border-1 border-primary sm:h-[200px] overflow-hidden"
          initial={{ opacity: 0, translateY: "50px" }}
          whileInView={{
            opacity: 1,
            translateY: "0px"
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
        >
          <div className="flex-[0_0_30%] h-full bg-primary p-2 text-white flex flex-col justify-center items-center gap-2">
            <FaEye size={60} />
            <p className="font-bold text-3xl">Our Vision</p>
          </div>
          <div className="flex-1 p-2 flex justify-center items-center">
            <p>
              To create a world where every individual, regardless of ability, is supported and included,
              with society and educational systems fully prepared to embrace neurodiversity.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-col-reverse sm:flex-row w-full rounded-md border-1 border-primary sm:h-[200px] overflow-hidden"
          initial={{ opacity: 0, translateY: "50px" }}
          whileInView={{
            opacity: 1,
            translateY: "0px"
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
        >
          <div className="flex-1 p-2 flex justify-center items-center">
            <p>
              To bridge the gap in inclusive education by training educators, parents, and
              caregivers with the skills and tools necessary to support children with learning and developmental
              challenges and also offering direct Therapy Services to individuals.
            </p>
          </div>
          <div className="flex-[0_0_30%] h-full bg-primary p-2 text-white flex flex-col justify-center items-center gap-2">
            <FaRocket size={60} />
            <p className="font-bold text-3xl">Our Mission</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}