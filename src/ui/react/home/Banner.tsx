import { motion } from "motion/react"
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "@/ui/react/buttons/Button";

export default function Banner() {
  return (
    <motion.div
      className="relative w-full h-[90vh] bg-[url('/therapy.jpg')] bg-cover bg-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      <div className="absolute inset-0 bg-black/50">
        <div className="p-3 w-full max-w-[800px] h-full flex flex-col justify-center text-white">
          <h1 className="font-open-sans font-bold text-[2.5rem] sm:text-[3.5rem]">Welcome to Smartprep Thrive</h1>
          <p className="text-lg font-medium">
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
