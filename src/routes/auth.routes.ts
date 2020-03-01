import { Router } from "express";
const router = Router()

import { signUp } from '../controllers/user.controller'

router.post('/signup', signUp)
router.post('/signin', )

export default router