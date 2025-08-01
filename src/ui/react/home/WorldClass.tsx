import { motion } from "motion/react"

export default function WorldClass() {
  return (
    <section className="mt-20 m-auto max-w-[1100px] flex items-center gap-2 p-2 flex-col-reverse sm:flex-row overflow-hidden">
      <motion.div
        className="flex-1 pt-2"
        initial={{ opacity: 0, translateX: -150 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
        viewport={{ once: true }}
      >
        <div
          style={{
            background: "linear-gradient(to right, var(--color-primary), orange, pink)",
            backgroundClip: "text"
          }}
        >
          <h1 className="text-[2.8rem] font-bagel text-transparent">
            State of the art services
          </h1>
        </div>
        <p className="text-[1.05rem]">We use the best services equipped with the best tools and professionals.</p>
        <p className="text-[1.05rem]">Trust us, your kids are in good hands.</p>
      </motion.div>
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, translateX: 150 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
        viewport={{ once: true }}
      >
        <img className="w-full h-[400px] rounded-md object-cover" src="/kids-excited.jpg" />
      </motion.div>
    </section>
  )
}