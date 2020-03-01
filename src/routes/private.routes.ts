import { Router } from "express";
const router = Router()

import passport from "passport";


router.get('/private', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send('succes private')
})

export default router