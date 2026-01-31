import express from 'express';
import { login, register } from '../controllers/auth.controller.js';

const router = express.Router();

const middleware = (req, res, next) => {
    console.log('route level');
    next();
}

// register route
router.post('/register', register);

// login route
router.post('/login',middleware, login);

export default router; 
