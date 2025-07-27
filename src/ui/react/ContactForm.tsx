import { useForm, type SubmitHandler } from "react-hook-form"
import { useState } from "react"

type Input = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [ submitting, setSubmitting ] = useState(false)
  const [ success, setSuccess ] = useState(false)
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<Input>()
  const inputClassname = `block w-full border border-black focus:border-primary rounded-sm
    bg-transparent outline-none mb-5 p-[6px_10px] text-[1.1rem] disabled:opacity-50`
  const labelClassname = `font-bold after:content-['*'] after:text-red-500`

  const onFormSubmit: SubmitHandler<Input> = (data) => {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
    }, 2000)
  }

  if (success) return (
    <div className="m-auto max-w-[500px]">
      <h1 className="text-[1.6rem] text-primary font-bold">Message sent</h1>
      <p>Thank you for your message. We'll reply to you soon.</p>
    </div>
  )

  return (
    <form className="m-auto max-w-[500px] relative" onSubmit={handleSubmit(onFormSubmit)}>
      {submitting && <div className="absolute inset-0 bg-white/50 z-10"></div>}

      <h1 className="text-[2.3rem] text-primary font-bold">
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

      <button className="py-2 px-3 rounded-md text-white bg-primary cursor-pointer disabled:opacity-50">
        Send
      </button>
    </form>
  )
}