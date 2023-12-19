import { TErrorSources, TGenericErrorResponse } from '../interface/error'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const math = err.message.match(/"([^"]*)"/)
  const extractedMessage = math && math[1]

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} already exists`,
    },
  ]
  const statusCode = 400
  return {
    statusCode,
    message: 'invalid ID',
    errorSources,
  }
}

export default handleDuplicateError
