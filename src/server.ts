import app from './app'
import { errorHandler } from './middleware/middleware'
import userRouter from './routes/userRoute'

const PORT = process.env.PORT

// Routes
app.use('/user', userRouter)

// Error handling middleware, make sure it's the last middleware added
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server Up Listening On Port ${PORT}...`)
})
