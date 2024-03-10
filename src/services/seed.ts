import prisma, {
  batchCreatePopularTrips,
  createCartItem,
  createTrip,
  createUser,
  getUserByEmail,
} from '.'
import chalk from 'chalk'
import { hashSync } from 'bcrypt'
import { Trip, User, PopularTrip } from '../models'

/* Dummy Data For Initial Users */
const users: User[] = [
  {
    firstName: 'LeBron',
    lastName: 'James',
    email: 'lebronjames@anynotrealmail.com',
    password: 'password',
  },
  {
    firstName: 'Stephen',
    lastName: 'Curry',
    email: 'stephencurry@anynotrealmail.com',
    password: 'password',
  },
  {
    firstName: 'Michael',
    lastName: 'Jordan',
    email: 'michaeljordan@anynotrealmail.com',
    password: 'password',
  },
  {
    firstName: 'Shaquille',
    lastName: 'Oneal',
    email: 'shaquilleoneal@anynotrealmail.com',
    password: 'password',
  },
  {
    firstName: 'Kobe',
    lastName: 'Bryant',
    email: 'kobebryant@anynotrealmail.com',
    password: 'password',
  },
]

/* Dummy Data For Initial Trips */
const trips: Trip[] = [
  {
    name: 'Hawaii Trip',
    description: 'A Beautiful Vacation In Hawaii',
    imageUrl: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=320&h=320',
    street: '444 Niu St',
    city: 'Honolulu',
    state: 'Hawaii',
    country: 'USA',
    startDate: '2023-10-17T00:00:00.000Z',
    endDate: '2023-10-24T00:00:00.000Z',
    price: 814.93,
    userId: '',
  },
  {
    name: 'Paris Trip',
    description: 'A Beautiful Vacation In Paris',
    imageUrl: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w320&h=320',
    street: '6 rue Charlot',
    city: 'Paris',
    state: '',
    country: 'France',
    startDate: '2023-11-06T00:00:00.000Z',
    endDate: '2023-11-08T00:00:00.000Z',
    price: 386.33,
    userId: '',
  },
  {
    name: 'Seoul Trip',
    description: 'A Beautiful Vacation In Seoul',
    imageUrl: 'https://images.unsplash.com/photo-1506816561089-5cc37b3aa9b0?w=320&h=320',
    street: '115 Toegye-ro',
    city: 'Seoul',
    state: 'Jung-gu',
    country: 'South Korea',
    startDate: '2023-04-01T00:00:00.000Z',
    endDate: '2023-04-16T00:00:00.000Z',
    price: 816.92,
    userId: '',
  },
  {
    name: 'Rio De Janeiro Trip',
    description: 'A Beautiful Vacation In Rio De Janeiro',
    imageUrl: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=320&h=320',
    street: 'Avenida Nossa Senhora de Copacabana, 1369',
    city: 'Rio De Janeiro',
    state: 'Rio De Janeiro',
    country: 'Brazil',
    startDate: '2023-07-04T00:00:00.000Z',
    endDate: '2023-07-29T00:00:00.000Z',
    price: 1435.2,
    userId: '',
  },
  {
    name: 'Los Angeles Trip',
    description: 'A Beautiful Vacation In Los Angeles',
    imageUrl: 'https://images.unsplash.com/photo-1609924211018-5526c55bad5b?w=320&h=320',
    city: 'Los Angeles',
    street: '8755 W Olympic Blvd',
    state: 'California',
    country: 'USA',
    startDate: '2022-10-22T00:00:00.000Z',
    endDate: '2022-11-01T00:00:00.000Z',
    price: 1099.12,
    userId: '',
  },
]

/* Dummy Data For Initial Popular Trips */
const popularTrips: PopularTrip[] = [
  {
    name: 'Hawaii',
    description: 'A Beautiful Vacation In Hawaii',
    imageUrl: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=320&h=320',
    street: '444 Niu St',
    city: 'Honolulu',
    state: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Paris',
    description: 'A Beautiful Vacation In Paris',
    imageUrl: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w320&h=320',
    street: '6 rue Charlot',
    city: 'Paris',
    state: '',
    country: 'France',
  },
  {
    name: 'Seoul',
    description: 'A Beautiful Vacation In Seoul',
    imageUrl: 'https://images.unsplash.com/photo-1506816561089-5cc37b3aa9b0?w=320&h=320',
    street: '115 Toegye-ro',
    city: 'Seoul',
    state: '',
    country: 'South Korea',
  },
  {
    name: 'Rio De Janeiro',
    description: 'A Beautiful Vacation In Rio De Janeiro',
    imageUrl: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=320&h=320',
    street: 'Avenida Nossa Senhora de Copacabana, 1369',
    city: 'Rio De Janeiro',
    state: 'Rio De Janeiro',
    country: 'Brazil',
  },
  {
    name: 'Los Angeles',
    description: 'A Beautiful Vacation In Los Angeles',
    imageUrl: 'https://images.unsplash.com/photo-1609924211018-5526c55bad5b?w=320&h=320',
    street: '8755 W Olympic Blvd',
    city: 'Los Angeles',
    state: 'California',
    country: 'USA',
  },
]

/* Get user id, email and name of each of the initial 5 users */
async function getUserInfo() {
  try {
    // map over the users array and find the user by email
    const userIds = await Promise.all(
      users.map(async (user) => {
        const foundUser = await getUserByEmail(user.email)

        // return an object with the user's name, email, and id
        return { ...foundUser }
      })
    )
    return userIds
  } catch (error) {
    console.log('Error During getUserInfo')
    throw error
  }
}

/* Drop all tables in the database */
async function dropTables() {
  try {
    console.log(chalk.red('Attempting To Drop Tables'))

    // have to make sure to drop tables in correct order to avoid foreign key constraints
    await prisma.popularTrip.deleteMany({})
    await prisma.cartItem.deleteMany({})
    await prisma.trip.deleteMany({})
    await prisma.cart.deleteMany({})
    await prisma.user.deleteMany({})

    console.log(chalk.red('Tables Dropped Successfully'))
  } catch (error) {
    console.log('Error During dropTables')
    throw error
  }
}

/* Create the initial 5 users */
async function createInitialUsers() {
  try {
    console.log(chalk.yellowBright('Attempting To Create Users'))

    // map over the users array and create a user for each one
    const usersCreated = await Promise.all(
      users.map(async (user) => {
        user.password = hashSync(user.password, 10)
        return createUser(user)
      })
    )

    console.log(
      chalk.greenBright('Users Created Successfully'),
      chalk.cyanBright(JSON.stringify(usersCreated, null, 2))
    )
  } catch (error) {
    console.log('Error During CreateInitialUsers')
    throw error
  }
}

/* Create the initial 5 trips */
async function createInitialTrips() {
  try {
    console.log(chalk.yellowBright('Attempting To Create Trips'))

    // get the user information
    const userInfo = await getUserInfo() // need this to create trips and assign the trips users

    // map over the trips array and create a trip for each one
    const tripsCreated = await Promise.all(
      trips.map(async (trip, index) =>
        createTrip({
          ...trip,
          startDate: trips[index].startDate,
          endDate: trips[index].endDate,
          userId: userInfo[index].id,
        } as Trip)
      )
    )

    console.log(
      chalk.greenBright('Trips Created Successfully'),
      chalk.magentaBright(JSON.stringify(tripsCreated, null, 2))
    )
  } catch (error) {
    console.log('Error During createInitialTrips')
    throw error
  }
}

async function createInitialCartItems() {
  try {
    console.log(chalk.yellowBright('Attempting To Create Cart Items'))

    // get user information need this to create cart items and assign the cart items to users carts
    const userInfo = await getUserInfo()

    // map over the user information array and create a cart item for each user
    const cartItems = await Promise.all(
      // give each user a cart item with their first trip in their cart
      userInfo.map(async (user) => await createCartItem(user.cart!, user.trips![0] as any))
    )

    console.log(
      chalk.greenBright('Cart Items Created Successfully'),
      chalk.blackBright(JSON.stringify(cartItems, null, 2))
    )
  } catch (error) {
    console.log('Error During createInitialCartItems')
    throw error
  }
}

/* Create the initial 5 popular trips */
async function createInitialPopularTrips() {
  try {
    console.log(chalk.yellowBright('Attempting To Create Popular Trips'))

    // map over the PopularTrips array and create a Popular Trip for each one
    const popularTripsCreated = await batchCreatePopularTrips(popularTrips)

    console.log(
      chalk.greenBright('Popular Trips Created Successfully'),
      chalk.whiteBright(JSON.stringify(popularTripsCreated, null, 2))
    )
  } catch (error) {
    console.log('Error During createInitialPopularTrips')
    throw error
  }
}

// Rebuild the database
export async function seedDB() {
  try {
    await dropTables()
    await createInitialPopularTrips()
    await createInitialUsers()
    await createInitialTrips()
    await createInitialCartItems()
  } catch (error) {
    console.log('Error during seedDB')
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

seedDB()
