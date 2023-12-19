import express from 'express'
import { SemesterRegistrationController } from './semesterRegistration.controller'
import { SemesterRegistrationValidation } from './SemesterRegistration.validation'
import validateRequest from '../../middleware/validateRequest'
const router = express.Router()

router.post(
  'create-semester-registration',
  validateRequest(
    SemesterRegistrationValidation.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.createSemesterRegistration,
)
router.get('/', SemesterRegistrationController.getAllSemesterRegistrations)
router.get('/:id', SemesterRegistrationController.getSingleSemesterRegistration)
router.patch(
  '/:id',
  validateRequest(
    SemesterRegistrationValidation.updateSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.updateSemesterRegistration,
)
router.delete('/:id', SemesterRegistrationController.deleteSemesterRegistration)

export const SemesterRegistrationRoute = router
