import { motion, AnimatePresence } from "motion/react"
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "@/ui/react/buttons/Button";
import { useState, useEffect } from "react";

const images = [
  "/kids-in-class.jpg",
  "/kids-playing.jpg",
  "/kids-playing2.jpg",
  "/kids-playing3.jpg",
]

export default function HeroSection() {
  const [ imageIndex, setImageIndex ] = useState(0)
  
  useEffect(() => {
    const timeout = setTimeout(
      () => setImageIndex(imageIndex === images.length-1 ? 0 : imageIndex+1),
      6000
    )

    return () => clearTimeout(timeout)
  }, [imageIndex])

  return (
    <motion.div
      className="relative w-full h-[80vh] bg-cover bg-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      <AnimatePresence>
        {images.map((_, index) => (
          imageIndex === index && <motion.div
            key={imageIndex}
            className={`absolute inset-0`}
            style={{
              background: `url('${images[imageIndex]}') center/cover`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
          ></motion.div>))}
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50 z-10">
        <div className="py-3 px-3 sm:px-20 w-full max-w-[1000px] h-full flex flex-col justify-center text-white">
          <h1 className="font-bagel text-[2.5rem] sm:text-[4.2rem]">Welcome to Smartprep Therapeutics</h1>
          <p className="text-[1.05rem] font-medium max-w-[90%]">
            Empowering individuals with special needs through personalized therapy,
            inclusive education, and expert training.
          </p>
          <Button
            className="text-[1rem]"
            link="/about-us"
            style={{
              padding: "8px 10px"
            }}
          >
            <span>
              Learn More
            </span>
            <IoIosArrowRoundForward size={30} />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
