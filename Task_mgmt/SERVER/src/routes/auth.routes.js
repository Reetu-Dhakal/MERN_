import express from 'express'
import { login, register } from '../controllers/auth.controllers.js'

const router = express.Router()

const middelware = (req, res, next) => {
    console.log('route level')
    next()
}
//? register router
router.post('/register', register);

//? login
router.post('/login',login)

export default router