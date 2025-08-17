import { motion } from "motion/react"

export default function Masterpiece() {
  return (
    <motion.section
      className="mt-20 mb-5 m-auto max-w-[1200px] p-2"
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut"
      }}
      viewport={{ once: true }}
    >
      <div
        className="relative w-full
          bg-[url('/kid-silhouette.jpg')] bg-cover bg-center rounded-[20px] overflow-hidden"
      >
        <div className="bg-black/60 text-white py-5 px-5 min-h-[450px] flex flex-col justify-center items-center">
          <p className="font-bagel text-[3rem]">
            &quot;Every child is a masterpiece in progress, and with the right support,
            their brilliance knows no bounds.&quot;
          </p>
          <p className="text-[1rem] italic font-medium self-start">- Smartprep Therapeutics</p>
        </div>
      </div>
    </motion.section>
  )
}