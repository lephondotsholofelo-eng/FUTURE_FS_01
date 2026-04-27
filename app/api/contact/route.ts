import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "tsholofelolephondo7@gmail.com",
      subject: "New Contact Form Message",
      html: `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}