import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { academicSemesterValidation } from './academicSemester.validation'
import { AcademicSemesterControllers } from './academicSemester.controller'

const router = express.Router()

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidation.createAcademicSemesterValidation),
  AcademicSemesterControllers.createAcademicSemester,
)

router.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
)

router.patch(
  '/:semesterId',
  validateRequest(academicSemesterValidation.updateAcademicSemesterValidation),
  AcademicSemesterControllers.updateAcademicSemester,
)

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters)

export const AcademicSemesterRoutes = router
