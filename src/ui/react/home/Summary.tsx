import { motion } from "motion/react"

export default function Summary() {
  return (
    <section className="m-auto p-[60px_10px_20px_10px] w-full bg-primary text-white overflow-hidden">
      <div className="m-auto max-w-[1150px] flex flex-wrap items-center gap-5">
        <motion.div
          className="flex-[0_1_450px] h-[350px]"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1
          }}
        >
          <img
            src="/teaching.jpg"
            className="rounded-md object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1
          }}
        >
          <h1
            className="font-bagel text-[3.2rem] text-center"
          >
            All children are equal
          </h1>

          <div
            className="text-center *:mb-[5px]"
          >
            <p>
              The variety of colors in the rainbow is what makes it beautiful to sight. Hence for all human beings,
              the variety of abilities and personalities of people is what makes society beautiful too. 
            </p>
            <p>
              That is what we believe at Smartprep Therapeutics, that every child&apos;s potential becomes their superpower! 
            </p>
            <p>
              We specialise in transforming special needs into extraordinary strengths through personalised education,
              therapy, and support. Join us in creating a world where no ability goes unnoticed, and every child thrives
              beyond limits.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}