import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import notFound from './app/middleware/notFound'
import router from './app/routes'
import cookieParser from 'cookie-parser'

// create express app
const app: Application = express()

// application level parse middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: ['http://localhost:5173'] })) //corse parse frontend base url request

// application routes
app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Hi Next Level Developer !')
})

// Global error handler
app.use(globalErrorHandler)

//Not Found
app.use(notFound)

export default app
