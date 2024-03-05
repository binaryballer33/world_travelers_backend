import { NextFunction, Request, Response } from 'express'
import { Resend } from 'resend'
import { returnZodErrorMessage } from '../../utils/helperFunctions'
import { EmailSchema } from '../../models/email'

// Create A New Welcome After User Account Registration Email
const registrationEmailController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // instantiate the email send client and create the email router
    const resend = new Resend(process.env.RESEND_API_KEY)
    returnZodErrorMessage(EmailSchema, req, res) // validate email data

    // send the email
    const { to, subject, html } = req.body
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
