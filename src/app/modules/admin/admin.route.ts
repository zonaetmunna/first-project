import express from 'express'
import { AdminControllers } from './admin.controller'
import validateRequest from '../../middleware/validateRequest'
import { updateAdminValidationSchema } from './admin.validation'
import auth from '../../middleware/auth'
import { USER_ROLE } from '../user/user.constant'

const router = express.Router()

router.get(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  AdminControllers.getAllAdmins,
)

router.get(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  AdminControllers.getSingleAdmin,
)

router.patch(
  '/:id',
  auth(USER_ROLE.superAdmin),

  validateRequest(updateAdminValidationSchema),
  AdminControllers.updateAdmin,
)

router.delete(
  '/:adminId',
  auth(USER_ROLE.superAdmin),
  AdminControllers.deleteAdmin,
)

export const AdminRoutes = router
