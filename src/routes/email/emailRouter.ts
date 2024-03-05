import express from 'express'
import { ROUTE } from '../../utils/constants'
import { purchaseConfirmationEmailController, registrationEmailController } from '../../controllers'

const emailRouter = express.Router()

emailRouter.post(ROUTE.REGISTRATION_EMAIL, registrationEmailController)
emailRouter.post(ROUTE.PURCHASE_CONFIRMATION_EMAIL, purchaseConfirmationEmailController)

export default emailRouter
