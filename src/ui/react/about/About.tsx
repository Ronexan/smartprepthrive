import { motion } from "motion/react"

export default function About() {
  return (
    <section className="m-auto mt-10 max-w-[1100px] p-2">
      <h1 className="font-bagel text-center text-primary text-[2.3rem]">
        Who we are
      </h1>

      <div className="max-w-[900px] m-auto text-center">
        <p>
          SmartPrep Thrive is a leading provider of specialized education and therapy services dedicated
          to empowering individuals with special needs. Our mission is to bridge the gap in inclusive education
          by training educators, parents, and caregivers with the skills and tools necessary to support children
          with learning and developmental challenges and also offering direct Therapy Services to individuals.
        </p>
        <p className="mt-1">
          With globally recognized certifications and a focus on practical, evidence-based methods, we have transformed
          lives locally and internationally. At SmartPrep, we are excelling in unlocking the full potential of every
          child through personalized care, expert training, and a commitment to excellence.
        </p>
      </div>

      <h1 className="mt-10 text-center font-bagel text-primary text-[2.3rem]">
        What we believe
      </h1>

      <div className="max-w-[900px] m-auto">
        <p className="text-center">
          At Smartprep Thrive, we believe that:
        </p>

        <div
          className="mt-10 w-full grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] auto-rows-auto gap-5"
          style={{
            placeItems: "auto center"
          }}
        >
          <div className="block border-2 border-primary rounded-lg w-full h-full">
            <div
              className="bg-primary text-white text-2xl font-bold rounded-br-xl p-2 w-[100px] h-[50px]
                flex justify-center items-center"
            >
              <p>1</p>
            </div>

            <p className="mt-2 py-2 px-3">
              There are unique abilities for every disability hence we are committed to
              aligning the numbers of the mind to reveal the hidden abilities.
            </p>
          </div>
          <div className="border-2 border-primary rounded-xl w-full">
            <div
              className="bg-primary text-white text-2xl font-bold rounded-br-lg p-2 w-[100px] h-[50px]
                flex justify-center items-center"
            >
              <p>2</p>
            </div>

            <p className="mt-2 py-2 px-3">
              Every supposed disabled child is firstly human before disabled and also they have no control over
              their cases. Hence we work tirelessly and dedicatedly to both support and prepare them for the
              neurotypical society as well as prepare the neurotypical society to accommodate them.
              This we do by constant training, direct service and enlightenment of the concept of disability and
              neurodivergence to the public as well as continuous preaching of the gospel of inclusion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}