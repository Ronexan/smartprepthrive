import { useForm, type SubmitHandler } from "react-hook-form"
import { useState } from "react"
import axios from "axios"

type Input = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [ submitting, setSubmitting ] = useState(false)
  const [ success, setSuccess ] = useState(false)
  const [ error, setError ] = useState("")
  const { register, handleSubmit, formState: { isSubmitting }, getValues } = useForm<Input>()
  const inputClassname = `block w-full border border-black focus:border-primary rounded-sm
    bg-transparent outline-none mb-4 p-[6px_10px] disabled:opacity-50 text-[0.9rem]`
  const labelClassname = `font-bold text-[0.95rem] after:content-['*'] after:text-red-500`

  const onFormSubmit: SubmitHandler<Input> = async (data) => {
    setSubmitting(true)
    
    try {
      const response = await axios(
        "/api/contact",
        {
          method: "post",
          data: getValues()
        }
      )

      console.log(response.data)

      setSuccess(true)
    }catch (e: any) {
      console.log(e)
      setError(e.response.data.error)
    }finally {
      setSubmitting(false)
    }
  }

  if (success) return (
    <div className="m-auto pb-10 flex flex-col justify-center h-full">
      <h1 className="text-[1.6rem] text-primary font-bagel">Message sent</h1>
      <p>Thank you for your message. We'll reply to you soon.</p>
    </div>
  )

  return (
    <form className="m-auto max-w-[420px] relative pb-10" onSubmit={handleSubmit(onFormSubmit)}>
      {submitting && <div className="absolute inset-0 bg-white/50 z-10"></div>}

      <h1 className="text-[2.3rem] text-primary font-bagel">
        Got a question?
      </h1>
      <p className="text-[1.05rem] mb-5">Send us a message. We'll love to hear from you!</p>

      <label className={labelClassname} htmlFor="name">Name</label>
      <input id="name" className={inputClassname} {...register("name", {required: true})} />

      <label className={labelClassname} htmlFor="email">Email</label>
      <input id="email" className={inputClassname} {...register("email", {required: true})} />

      <label className={labelClassname} htmlFor="subject">Subject</label>
      <input id="subject" className={inputClassname} {...register("subject", {required: true})} />

      <label className={labelClassname} htmlFor="message">Message</label>
      <textarea
        id="message" className={inputClassname}{...register("message", {required: true})}
        style={{
          resize: "none",
          height: "150px"
        }}
      />

      <button className="py-2 px-3 rounded-md text-white bg-primary cursor-pointer text-[0.9rem] disabled:opacity-50">
        Send
      </button>

      {error && <p className="text-[0.8rem] text-red-500 p-2">{error}</p>}
    </form>
  )
}