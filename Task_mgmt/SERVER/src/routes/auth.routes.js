import express from 'express'
import { login, register, getUserDetail } from '../controllers/auth.controllers.js'
import { authenticate } from '../middlewares/auth.middlewares.js'

const router = express.Router()

const middelware = (req, res, next) => {
    console.log('route level')
    next()
}
//? register router
router.post('/register', register);

//? login
router.post('/login',login)

//user detail
router.get('/user-detail', authenticate, getUserDetail)

export default router