import app from './app'
import { errorHandler } from './middleware/middleware'
import allRoutesRouter from './routes/allRoutes'

const PORT = process.env.PORT

// Add all routes to the app
app.use('/', allRoutesRouter)

// Error handling middleware, make sure it's the last middleware added
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server Up Listening On Port ${PORT}...`)
})
