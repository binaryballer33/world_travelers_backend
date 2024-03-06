import express from 'express'
import { vacationPackageController } from '../../controllers'
import { ROUTE } from '../../utils/constants'

const vacationPackageRouter = express.Router()

vacationPackageRouter.get(ROUTE.VACATION_PACKAGES, vacationPackageController)

export default vacationPackageRouter
