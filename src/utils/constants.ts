export enum ROUTE {
  // USER ROUTES
  USER = '/user',
  REGISTER = '/register',
  LOGIN = '/login',
  PROFILE = '/profile',
  GET_USER_BY_ID = '/user',
  UPDATE_USER = '/update/user',
  DELETE_USER = '/delete/user',

  // TRIP ROUTES
  TRIPS = '/trips',
  CREATE_TRIP = '/create/trip',
  GET_TRIP_BY_USER_ID = '/user',
  UPDATE_TRIP = '/update/trip/:id',
  DELETE_TRIP = '/delete/trip/:id',

  // CART ROUTES
  CART = '/cart',
  CREATE_CART = '/create/cart',
  GET_CART = '/get/cart',
  UPDATE_CART_TOTAL = '/update/cart/total',
  DELETE_CART = '/delete/cart',

  // CART ITEM ROUTES
  CART_ITEM = '/cart/item',
  CREATE_CART_ITEM = '/create/item',
  DELETE_CART_ITEM = '/delete/item',
  DELETE_ALL_CART_ITEMS = '/delete/all/items',

  // POPULAR TRIPS ROUTES
  POPULAR = '/popular',
  POPULAR_TRIPS = '/trips',

  // EMAIL ROUTES
  EMAIL = '/email',
  REGISTRATION_EMAIL = '/registration/email',
  PURCHASE_CONFIRMATION_EMAIL = '/purchase/confirmation/email',
}

// VACATION PACKAGE ROUTES
export function getPopularTripsRoute() {
  return `${ROUTE.POPULAR}${ROUTE.POPULAR_TRIPS}`
}

// TRIP ROUTES
export function getCreateTripRoute() {
  return `${ROUTE.TRIPS}${ROUTE.CREATE_TRIP}`
}

export function getUpdateTripRoute(id: string) {
  return `${ROUTE.TRIPS}${ROUTE.UPDATE_TRIP}`
}

export function getDeleteTripRoute(id: string) {
  return `${ROUTE.TRIPS}${ROUTE.DELETE_TRIP}`
}

export function getGetTripByUserIdRoute() {
  return `${ROUTE.TRIPS}${ROUTE.GET_TRIP_BY_USER_ID}`
}

// USER ROUTES
export function getRegisterRoute() {
  return `${ROUTE.USER}${ROUTE.REGISTER}`
}

export function getLoginRoute() {
  return `${ROUTE.USER}${ROUTE.LOGIN}`
}

export function getProfileRoute() {
  return `${ROUTE.USER}${ROUTE.PROFILE}`
}

export function getUpdateUserRoute() {
  return `${ROUTE.USER}${ROUTE.UPDATE_USER}`
}

export function getDeleteUserRoute() {
  return `${ROUTE.USER}${ROUTE.DELETE_USER}`
}

// EMAIL ROUTES
export function getRegistrationEmailRoute() {
  return `${ROUTE.EMAIL}${ROUTE.REGISTRATION_EMAIL}`
}

export function getPurchaseConfirmationEmailRoute() {
  return `${ROUTE.EMAIL}${ROUTE.PURCHASE_CONFIRMATION_EMAIL}`
}
