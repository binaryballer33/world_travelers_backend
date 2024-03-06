import { NextFunction, Request, Response } from 'express'
import { Resend } from 'resend'
import { RESEND_API_KEY } from '../../utils/secrets'

// Create A New Purchase Confirmation Email
const purchaseConfirmationEmailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // instantiate the email send client and create the email router
    const resend = new Resend(RESEND_API_KEY)

    // send the purchase confirmation email
    const { from, to, subject, html } = req.body
    await resend.emails.send({
      from,
      to,
      subject,
      html,
    })

    // send the response back to the client
    res.status(200).send({
      message: 'Successfully Sent Purchase Confirmation Email.',
    })
  } catch (error) {
    next(error)
  }
}

export default purchaseConfirmationEmailController
