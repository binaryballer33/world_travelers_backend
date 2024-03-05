export enum ROUTE {
  // TRIP ROUTES
  TRIPS = '/trips',
  CREATE_TRIP = '/create/trip',
  GET_TRIP_BY_USER_ID = '/user',
  UPDATE_TRIP = '/update/trip/:id',
  DELETE_TRIP = '/delete/trip/:id',

  // USER ROUTES
  USER = '/user',
  REGISTER = '/register',
  LOGIN = '/login',
  PROFILE = '/profile',
  GET_USER_BY_ID = '/user',
  UPDATE_USER = '/update/user',
  DELETE_USER = '/delete/user',
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
