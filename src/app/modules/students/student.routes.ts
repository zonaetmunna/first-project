import express from 'express'
import { StudentControllers } from './student.controller'
import validateRequest from '../../middleware/validateRequest'
import { updateStudentValidationSchema } from './student.validation'

const router = express.Router()

router.get('/:studentId', StudentControllers.getSingleStudent)

router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
)

router.delete('/:studentId', StudentControllers.deleteStudent)

router.get('/', StudentControllers.getAllStudents)

export const StudentRoutes = router
