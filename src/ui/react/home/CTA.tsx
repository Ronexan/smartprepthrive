import Button from "@/ui/react/buttons/Button"
import { IoIosArrowRoundForward } from "react-icons/io";
import { useMedia } from "react-use"

export default function CTA() {
  const isSmall = useMedia('(max-width: 640px)')
  console.log(isSmall)

  return (
    <section
      className="mt-20 w-full min-h-[350px]"
      style={{
        background: "url('/boy-on-bed.jpg') no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top right"
      }}
    >
      <div
        className="w-full min-h-[inherit] sm:w-[80%] p-3 text-white"
        style={!isSmall ? {
          background: "linear-gradient(to right, black, transparent)"
        } : {
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}
      >
        <h1 className="font-bagel text-[2.5rem]">Empower your child now!</h1>
        <p>
          A future of endless possibilities awaits your child.
        </p>
        <p>
          Reach out to us now to see what we can do for you loved one.
        </p>
        <Button>
          <span>Reach Out</span>
          <IoIosArrowRoundForward size={30} />
        </Button>
      </div>
    </section>
  )
}