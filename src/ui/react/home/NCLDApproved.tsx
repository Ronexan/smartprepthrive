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
        <img className="w-full h-[250px] rounded-md object-contain" src="/aligned.jpg" />
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
            In Alignment with Global Best Practices
          </h1>
        </div>
        <p className="text-[1.05rem]">
          At SmartPrep, we are committed to delivering excellence in special needs education.
          In preference to global best practices, we align our training frameworks and methodologies
          with the standards of the National Center for Learning Disabilities (NCLD).
          Their globally recognized models and evidence-based practices serve as a benchmark for the
          quality and relevance of our programs.
        </p>
      </motion.div>
    </section>
  )
}