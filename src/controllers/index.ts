/* USER CONTROLLERS */
export { default as registerUserController } from './user/registerUserController'
export { default as loginUserController } from './user/loginUserController'
export { default as profileUserController } from './user/profileUserController'
export { default as updateUserController } from './user/updateUserController'
export { default as deleteUserController } from './user/deleteUserController'

/* VACATION PACKAGE CONTROLLERS */
export { default as vacationPackageController } from './vacationPackage/vacationPackageController'

/* TRIPS CONTROLLERS */
export { default as getTripsByUserIdController } from './trips/getTripsByUserIdController'
export { default as createTripController } from './trips/createTripController'
export { default as updateTripController } from './trips/updateTripController'
export { default as deleteTripController } from './trips/deleteTripController'

/* EMAIL CONTROLLERS */
export { default as registrationEmailController } from './email/registrationEmailController'
export { default as purchaseConfirmationEmailController } from './email/purchaseConfirmationEmailController'
