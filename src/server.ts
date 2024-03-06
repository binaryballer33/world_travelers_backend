import app from './app'
import { PORT } from './utils/secrets'

app.listen(PORT, () => {
  console.log(`Server Up Listening On Port ${PORT}...`)
})
