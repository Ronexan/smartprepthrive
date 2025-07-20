import { IoMdPerson } from "react-icons/io";

const team = [
  {
    name: "Mr. Johnny Jaro",
    roles: [
      "Educational Therapist",
    ]
  },
  {
    name: "Mrs. Osho Olatokunbo"
  },
  {
    name: "Mrs. Chidinma Eleanya Chukwu"
  },
  {
    name: "Miss. Peace Uzum"
  },
]

export default function Team() {
  return (
    <section className="m-auto mt-15 mb-20 max-w-[1100px] p-2">
      <h1 className="text-primary text-[2.3rem] font-bold">Meet the team</h1>

      <div className="mt-10 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] auto-rows-[300px]">
        {team.map(member => (
          <div className="">
            <div className="m-auto w-max text-primary">
              <IoMdPerson size={150} color="" />
            </div>
            <p className="text-center text-xl text-primary font-bold">{member.name}</p>
            {member.roles?.map(role => (
              <p className="text-center text-gray-500 text-sm">{role}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}