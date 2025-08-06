import type { APIRoute } from "astro";
import { parseNewContact } from "@/lib/parseMjml";
import axios from "axios";

export const prerender = false

console.log(import.meta.env.BREVO_API_KEY)

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json()

    const mail = parseNewContact(data.name, data.email, data.subject, data.message)
    
    await axios(
      "https://api.brevo.com/v3/smtp/email",
      {
        headers: {
          "api-key": import.meta.env.BREVO_API_KEY
        },
        method: "post",
        data: {
          sender: {
            name: "Smartprep Contact",
            email: "contact@smartprepthrive.com.ng"
          },
          to: [
            {
              email: "johnnyjaro11@gmail.com",
              name: "Jaros"
            }
          ],
          subject: `New message from ${data.name.split(" ")[0]}`,
          htmlContent: mail,
          preheader: `You have a new contact message from ${data.name.split(" ")[0]}`
        }
      }
    )

    return Response.json("Success")
  }catch (e: any) {
    console.log(e)
    return Response.json({ error: "Failed to post. Try again later." }, {status: 500})
  }
}
