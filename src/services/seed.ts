import prisma, { batchCreateVacationPackages, createTrip, createUser, findUserByEmail } from '.'
import chalk from 'chalk'
import bcrypt from 'bcrypt'
import { VacationPackage, Trip, User } from '../models'

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
    city: 'Honolulu',
    state: 'Hawaii',
    country: 'USA',
    startDate: '',
    endDate: '',
    imageUrl: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=320&h=320',
    userId: '',
  },
  {
    name: 'Paris Trip',
    city: 'Paris',
    state: '',
    country: 'France',
    startDate: '',
    endDate: '',
    imageUrl: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w320&h=320',
    userId: '',
  },
  {
    name: 'Seoul Trip',
    city: 'Seoul',
    state: '',
    country: 'South Korea',
    startDate: '',
    endDate: '',
    imageUrl: 'https://images.unsplash.com/photo-1506816561089-5cc37b3aa9b0?w=320&h=320',
    userId: '',
  },
  {
    name: 'Rio De Janeiro Trip',
    city: 'Rio De Janeiro',
    state: 'Rio De Janeiro',
    country: 'Brazil',
    startDate: '',
    endDate: '',
    imageUrl: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=320&h=320',
    userId: '',
  },
  {
    name: 'Los Angeles Trip',
    city: 'Los Angeles',
    state: 'California',
    country: 'USA',
    startDate: '',
    endDate: '',
    imageUrl: 'https://images.unsplash.com/photo-1609924211018-5526c55bad5b?w=320&h=320',
    userId: '',
  },
]

/* Dummy Data For Initial Vacation Packages */
const vacationPackages: VacationPackage[] = [
  {
    name: 'Hawaii',
    description: 'A Beautiful Vacation In Hawaii',
    city: 'Honolulu',
    state: 'Hawaii',
    country: 'USA',
    price: 2400,
    imageUrl: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=320&h=320',
  },
  {
    name: 'Paris',
    description: 'A Beautiful Vacation In Paris',
    city: 'Paris',
    state: '',
    country: 'France',
    price: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w320&h=320',
  },
  {
    name: 'Seoul',
    description: 'A Beautiful Vacation In Seoul',
    city: 'Seoul',
    state: '',
    country: 'South Korea',
    price: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1506816561089-5cc37b3aa9b0?w=320&h=320',
  },
  {
    name: 'Rio De Janeiro',
    description: 'A Beautiful Vacation In Rio De Janeiro',
    city: 'Rio De Janeiro',
    state: 'Rio De Janeiro',
    country: 'Brazil',
    price: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=320&h=320',
  },
  {
    name: 'Los Angeles',
    description: 'A Beautiful Vacation In Los Angeles',
    city: 'Los Angeles',
    state: 'California',
    country: 'USA',
    price: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1609924211018-5526c55bad5b?w=320&h=320',
  },
]

/* Drop all tables in the database */
async function dropTables() {
  try {
    console.log(chalk.red('Attempting To Drop Tables'))

    // have to make sure to drop tables in correct order to avoid foreign key constraints
    await prisma.vacationPackage.deleteMany({})
    await prisma.trip.deleteMany({})
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
        user.password = await bcrypt.hash(user.password, 10)
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

/* Get user id, email and name of each of the initial 5 users */
async function getUserInfo() {
  try {
    // map over the users array and find the user by email
    const userIds = await Promise.all(
      users.map(async (user) => {
        const foundUser = await findUserByEmail(user.email)

        // return an object with the user's name, email, and id
        return {
          name: `${foundUser?.firstName} ${foundUser?.lastName}`,
          email: foundUser?.email,
          id: foundUser?.id,
        }
      })
    )
    return userIds
  } catch (error) {
    console.log('Error During getUserInfo')
    throw error
  }
}

/* Create the initial 5 trips */
async function createInitialTrips() {
  try {
    console.log(chalk.yellowBright('Attempting To Create Trips'))

    // create the dates
    const startDate = new Date()
    const endDate = new Date()
    endDate.setDate(startDate.getDate() + 7)

    // get the user information
    const userInfo = await getUserInfo() // need this to create trips and assign the trips users

    // map over the trips array and create a trip for each one
    const tripsCreated = await Promise.all(
      trips.map(async (trip, index) =>
        createTrip({
          ...trip,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
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

/* Create the initial 5 vacation packages */
async function createInitialVacationPackages() {
  try {
    console.log(chalk.yellowBright('Attempting To Create Vacation Packages'))

    // map over the vacationPackages array and create a vacation package for each one
    const vacationPackagesCreated = await batchCreateVacationPackages(vacationPackages)

    console.log(
      chalk.greenBright('Vacation Packages Created Successfully'),
      chalk.whiteBright(JSON.stringify(vacationPackagesCreated, null, 2))
    )
  } catch (error) {
    console.log('Error During createInitialVacationPackages')
    throw error
  }
}

// Rebuild the database
async function seedDB() {
  try {
    await dropTables()
    await createInitialUsers()
    await createInitialTrips()
    await createInitialVacationPackages()
  } catch (error) {
    console.log('Error during seedDB')
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

seedDB()
