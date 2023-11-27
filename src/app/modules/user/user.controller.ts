import httpStatus from 'http-status'

import { NextFunction, Request, Response } from 'express'
import { UserServices } from './user.service'
// import { userValidation } from './user.validation'
import sendResponse from '../../utils/sendResponse'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body
    console.log(password, studentData)

    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(password, studentData)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const UserControllers = {
  createStudent,
}
