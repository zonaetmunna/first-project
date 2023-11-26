import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.routes'
import { StudentRoutes } from '../modules/students/student.routes'

const router = Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
