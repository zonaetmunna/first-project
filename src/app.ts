import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import notFound from './app/middleware/notFound'
import router from './app/routes'

// create express app
const app: Application = express()

// application level parse middleware
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1', router)

const test = (req: Request, res: Response) => {
  const a = 10
  res.json(a)
}

app.get('/', test)

// Global error handler
app.use(globalErrorHandler)

//Not Found
app.use(notFound)

export default app
