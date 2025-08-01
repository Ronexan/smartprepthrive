import { motion } from "motion/react"
import OutlineButton from "../buttons/OutlineButton"
import Button from "../buttons/Button"

export default function WhoWeAre() {
  return (
    <motion.section
      className="mt-20 mb-10 m-auto w-full bg-[url('/little-girls.jpg')] bg-cover bg-top"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 1,
        ease: "easeOut"
      }}
    >
      <div className="w-full min-h-[450px] bg-black/60 text-white p-[50px_10px] flex flex-col justify-center items-center">
        <h1 className="text-[4rem] font-bagel text-center">
          Who We Are
        </h1>
        <p className="text-center text-lg max-w-[800px]">
          SmartPrep Therapeutics is a leading provider of specialized education
          and therapy services dedicated to empowering individuals with special needs. 
        </p>
        <Button
          link="/about-us"
          style={{
            color: "black",
            backgroundColor: "white",
            marginTop: "10px",
            fontSize: "1.1rem"
          }}
        >
          Learn More
        </Button>
      </div>
    </motion.section>
  )
}