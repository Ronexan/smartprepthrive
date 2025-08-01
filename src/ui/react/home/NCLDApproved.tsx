import { motion } from "motion/react"

export default function NCLDApproved() {
  return (
    <section className="mt-20 mb-5 m-auto max-w-[1100px] flex items-center gap-2 p-2 flex-col sm:flex-row overflow-hidden">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, translateX: -150 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
        viewport={{ once: true }}
      >
        <img className="w-full h-[250px] rounded-md object-contain" src="/approved.jpeg" />
      </motion.div>
      <motion.div
        className="flex-1 pt-2"
        initial={{ opacity: 0, translateX: 150 }}
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
            Officially Approved
          </h1>
        </div>
        <p className="text-[1.05rem]">
          We are officially approved by the NCLD (National Center For Learning Disabilities)
          and IDA (International Disabilities Alliance) SEN Africa Training Facilitator.
        </p>
      </motion.div>
    </section>
  )
}