import express from 'express'
// import { getAll} from '../controllers/task.controller.js'
// import { getByid, remove, update } from '../controllers/userControllers.js'
// import { create } from 'domain'
import { create, getAll,getByid,update,remove } from '../controllers/task.controller.js'
import { authenticate } from '../middlewares/auth.middlewares.js'

const router = express.Router()


//? get all tasks
router.get('./', getAll)

//? get by id 

router.get('./id',authenticate,getByid)

//! create
router.post('/',authenticate,create)

//!update
router.put('./:id',authenticate,update)

//! delete
router.delete('./:id',authenticate, remove)

//! pin task
//! get all pinned task

export default router;