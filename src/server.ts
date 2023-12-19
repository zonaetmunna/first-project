import mongoose from 'mongoose'
import { Server } from 'http'

import app from './app'
import config from './app/config'

let server: Server

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('database connected successfully')

    server = app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

main()

process.on('unhandledRejection', () => {
  console.log(`😈 unhandledRejection is detected , shutting down ...`)
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`)
  process.exit(1)
})
