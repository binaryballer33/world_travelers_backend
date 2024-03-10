import { NextFunction, Request, Response } from 'express'
import { Resend } from 'resend'
import { EmailSchema } from '../../models/email/emailModel'
import { RESEND_API_KEY } from '../../utils/secrets'

// Create A New Welcome Email After User Account Registration Email
const registrationEmailController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // instantiate the email send client and create the email router
    const resend = new Resend(RESEND_API_KEY)
    const validatedEmailData = EmailSchema.parse(req.body) // validate email data

    // send the email
    const { to, subject, html } = validatedEmailData
    await resend.emails.send({
      from: 'shaqmandy@resend.dev',
      to,
      subject,
      html,
    })

    // send the response back to the client
    res.status(200).send({
      message: 'Successfully Sent User Account Registration Email.',
    })
  } catch (error) {
    next(error)
  }
}

export default registrationEmailController
